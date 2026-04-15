'use client';

import { useState } from 'react';
import type { TreeNode, HistoryEntry, QuestionNode, LeafNode } from '@/types';
import { careerTree } from '@/data/careerTree';
import WelcomeScreen from '@/components/WelcomeScreen';
import QuestionScreen from '@/components/QuestionScreen';
import ResultScreen from '@/components/ResultScreen';
import HelpModal from '@/components/HelpModal';

type Phase = 'welcome' | 'question' | 'result';

export default function Home() {
  const [phase, setPhase] = useState<Phase>('welcome');
  const [currentNode, setCurrentNode] = useState<TreeNode>(careerTree);
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [showHelp, setShowHelp] = useState(false);

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
      setCurrentNode(careerTree);
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
    setCurrentNode(careerTree);
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
      <button
        onClick={() => setShowHelp(true)}
        className="fixed bottom-5 right-5 z-40 w-10 h-10 rounded-full bg-white border border-violet-200 text-violet-500 font-bold text-lg shadow-md hover:bg-violet-50 hover:text-violet-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
        aria-label="Ayuda"
      >
        ?
      </button>
      {showHelp && <HelpModal onClose={() => setShowHelp(false)} />}
    </>
  );
}
