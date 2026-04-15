'use client';

import { useState, useEffect } from 'react';
import type { Locale, TreeNode, HistoryEntry, QuestionNode, LeafNode } from '@/types';
import { LocaleContext, useStrings } from '@/i18n';
import { getCareerTree } from '@/data/getCareerTree';
import WelcomeScreen from '@/components/WelcomeScreen';
import QuestionScreen from '@/components/QuestionScreen';
import ResultScreen from '@/components/ResultScreen';
import HelpModal from '@/components/HelpModal';
import AppHeader from '@/components/AppHeader';

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
          onSelect={handleOptionSelect}
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
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-violet-50 via-white to-indigo-50">
      <AppHeader
        onHelpClick={() => setShowHelp(true)}
        history={phase === 'question' ? history : undefined}
        onBack={phase === 'question' ? handleBack : undefined}
      />
      <main className="flex-1 flex flex-col">
        {renderScreen()}
      </main>
      {showHelp && <HelpModal onClose={() => setShowHelp(false)} />}
    </div>
  );
}
