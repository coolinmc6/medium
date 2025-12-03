import React, { type PropsWithChildren } from 'react';

type AOCAnswerProps = {
  title: string;
  answerText: string;
  answerValue: number | string;
  className?: string;
} & PropsWithChildren;

export const AOCAnswer = ({
  title,
  answerText,
  answerValue,
  className = 'text-blue-600 dark:text-blue-400',
  children,
}: AOCAnswerProps) => {
  return (
    <>
      <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-gray-100">
        {title}
      </h3>
      <div className="flex items-baseline gap-2 mb-4">
        <span className="text-gray-600 dark:text-gray-400">{answerText}:</span>
        <span className={`text-2xl font-mono font-bold ${className}`}>
          {answerValue}
        </span>
      </div>
      {children && (
        <div className="text-gray-600 dark:text-gray-300 space-y-2">
          {children}
        </div>
      )}
    </>
  );
};
