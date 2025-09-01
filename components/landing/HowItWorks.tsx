import { Brain, Sparkles, BookOpen, TrendingUp } from "lucide-react";

const HowItWorks = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-20 mb-20 py-24">
      <div className="rounded-2xl px-8 py-12 md:px-12 md:py-16 shadow-2xl backdrop-blur-md bg-white/5 border border-white/10">
        <div className="text-center mb-12">
          <Brain className="w-16 h-16 mx-auto mb-6 text-purple-400" />
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">
            How Vidhya AI <span className="text-purple-400">Works</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Three simple steps to transform your learning experience forever.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-500 to-purple-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/40">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-extrabold text-xl mb-3 text-purple-300">
              Upload & Learn
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Upload your PDFs, YouTube videos, or study materials. Our AI
              instantly understands your content.
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-500 to-purple-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/40">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-extrabold text-xl mb-3 text-purple-300">
              AI Magic
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Get instant summaries, interactive mind maps, and personalized MCQ
              tests tailored to your learning style.
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-500 to-purple-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/40">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-extrabold text-xl mb-3 text-purple-300">
              Retain & Excel
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Track your progress, strengthen weak areas, and achieve 100%
              better retention with spaced repetition.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
