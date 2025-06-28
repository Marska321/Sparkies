// src/components/SparkFolio.js
import React from 'react';
import { BookOpen } from 'lucide-react';
import { lessons } from '../lessonData'; // We need the lesson structure

export default function SparkFolio({ userProgress }) {
  // Get the answers from the user's progress, or use an empty object if none exist
  const allAnswers = userProgress.lessonAnswers || {};

  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-gray-100 animate-fade-in-up">
      <div className="text-center">
        <BookOpen className="mx-auto h-12 w-12 text-blue-500" />
        <h1 className="text-4xl font-bold text-gray-800 mt-4">My SparkFolio</h1>
        <p className="text-gray-600 mt-2">A collection of all my brilliant ideas and work!</p>
      </div>

      <div className="mt-8 space-y-8">
        {/* We will map over the original lessons data to maintain the correct order */}
        {lessons.map(lesson => {
          // Check if there are any saved answers for this lesson
          const lessonKey = `lesson${lesson.id}`;
          const answersForLesson = allAnswers[lessonKey];

          // If there are no answers for this lesson, don't render anything for it
          if (!answersForLesson || Object.keys(answersForLesson).length === 0) {
            return null;
          }

          return (
            <div key={lesson.id} className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">{lesson.title}</h2>
              <div className="space-y-4">
                {lesson.content.activities.map(activity => (
                  <div key={activity.id}>
                    {activity.writeAnswers?.map((writeAnswer, taskIndex) => {
                      const answerKey = `activity${activity.id}_writeAnswer${taskIndex}`;
                      const savedAnswer = answersForLesson[answerKey];
                      const parts = writeAnswer.split('___');

                      // Only display if an answer was saved for this question
                      if (savedAnswer) {
                        return (
                          <div key={taskIndex} className="bg-white p-4 rounded-lg shadow-sm">
                            <p className="font-semibold text-gray-700">{parts[0]}</p>
                            <p className="text-lg text-purple-700 pl-4 mt-1 border-l-4 border-purple-200">{savedAnswer}</p>
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {/* Show a message if no work has been saved yet */}
        {Object.keys(allAnswers).length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Your portfolio is empty right now.</p>
            <p className="text-gray-500">Complete some lesson activities and save your progress to see them here!</p>
          </div>
        )}
      </div>
    </div>
  );
}
