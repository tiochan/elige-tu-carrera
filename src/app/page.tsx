'use client';

import { useState, useEffect } from 'react';
import type { Locale, TreeNode, HistoryEntry, QuestionNode, LeafNode } from '@/types';
import { LocaleContext, useStrings } from '@/i18n';
import { getCareerTree } from '@/data/getCareerTree';
import WelcomeScreen from '@/components/WelcomeScreen';
import QuestionScreen from '@/components/QuestionScreen';
import ResultScreen from '@/components/ResultScreen';
import HelpModal from '@/components/HelpModal';
import LanguageSwitcher from '@/components/LanguageSwitcher';

type Phase = 'welcome' | 'question' | 'result';

export default function Home() {
  const [locale, setLocale] = useState<Locale>('es');
  const [rootNode, setRootNode] = useState<TreeNode>(() => getCareerTree('es'));

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  function handleSetLocale(newLocale: Locale) {
    setLocale(newLocale);
    setRootNode(getCareerTree(newLocale));
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale: handleSetLocale }}>
      <HomeContent rootNode={rootNode} />
    </LocaleContext.Provider>
  );
}

function HomeContent({ rootNode }: { rootNode: TreeNode }) {
  const t = useStrings();
  const [phase, setPhase] = useState<Phase>('welcome');
  const [currentNode, setCurrentNode] = useState<TreeNode>(rootNode);
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    setPhase('welcome');
    setCurrentNode(rootNode);
    setHistory([]);
  }, [rootNode]);

  function handleStart() {
    setPhase('question');
  }

  function handleOptionSelect(optionIndex: number) {
    if (currentNode.type !== 'question') return;

    const option = currentNode.options[optionIndex];
    const newHistory: HistoryEntry[] = [
      ...history,
      { node: currentNode, chosenOptionLabel: option.label },
    ];

    setHistory(newHistory);

    if (option.next.type === 'leaf') {
      setCurrentNode(option.next);
      setPhase('result');
    } else {
      setCurrentNode(option.next);
    }
  }

  function handleBack() {
    if (history.length === 0) {
      setPhase('welcome');
      setCurrentNode(rootNode);
      return;
    }

    const newHistory = [...history];
    const last = newHistory.pop()!;
    setHistory(newHistory);
    setCurrentNode(last.node);
    setPhase('question');
  }

  function handleReset() {
    setHistory([]);
    setCurrentNode(rootNode);
    setPhase('welcome');
  }

  function renderScreen() {
    if (phase === 'welcome') {
      return <WelcomeScreen onStart={handleStart} />;
    }

    if (phase === 'question' && currentNode.type === 'question') {
      return (
        <QuestionScreen
          node={currentNode as QuestionNode}
          history={history}
          onSelect={handleOptionSelect}
          onBack={handleBack}
        />
      );
    }

    if (phase === 'result' && currentNode.type === 'leaf') {
      return (
        <ResultScreen
          node={currentNode as LeafNode}
          onReset={handleReset}
          onBack={handleBack}
        />
      );
    }

    return null;
  }

  return (
    <>
      {renderScreen()}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
        <LanguageSwitcher />
        <button
          onClick={() => setShowHelp(true)}
          className="w-10 h-10 rounded-full bg-white border border-violet-200 text-violet-500 font-bold text-lg shadow-md hover:bg-violet-50 hover:text-violet-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
          aria-label={t.helpButtonAriaLabel}
        >
          ?
        </button>
      </div>
      {showHelp && <HelpModal onClose={() => setShowHelp(false)} />}
    </>
  );
}
