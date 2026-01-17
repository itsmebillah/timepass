import { Shield, Zap, Globe, Users, Video, GamepadIcon, Download, Headphones } from 'lucide-react';

const features = [
  {
    name: 'Premium Security',
    description: 'Bank-level encryption and secure payment processing to keep your data safe.',
    icon: Shield,
  },
  {
    name: 'Blazing Fast',
    description: 'Optimized servers for lightning-fast content delivery and streaming.',
    icon: Zap,
  },
  {
    name: 'Global Access',
    description: 'Access our platform from anywhere in the world with no restrictions.',
    icon: Globe,
  },
  {
    name: 'Community',
    description: 'Join an exclusive community of like-minded premium members.',
    icon: Users,
  },
  {
    name: 'HD Content',
    description: 'Stream and download high-definition videos in 4K resolution.',
    icon: Video,
  },
  {
    name: 'Premium Games',
    description: 'Access to exclusive games and early beta releases.',
    icon: GamepadIcon,
  },
  {
    name: 'Offline Access',
    description: 'Download content to enjoy offline without internet connection.',
    icon: Download,
  },
  {
    name: '24/7 Support',
    description: 'Round-the-clock customer support via chat, email, and phone.',
    icon: Headphones,
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Our Platform?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We offer the most comprehensive set of features to enhance your experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition duration-300"
            >
              <div className="inline-flex items-center justify-center p-3 bg-blue-600/20 rounded-lg mb-4">
                <feature.icon className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.name}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
