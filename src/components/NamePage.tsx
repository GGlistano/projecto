import { useState } from 'react';

interface NamePageProps {
  onSubmit: (name: string) => void;
}

function NamePage({ onSubmit }: NamePageProps) {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onSubmit(name.trim());
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12 relative">
      <div className="max-w-2xl w-full text-center space-y-8">
        <div className="flex items-center justify-center gap-2 mb-12">
          <span className="text-3xl md:text-4xl font-bold text-black">cupom</span>
          <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-400 rounded-full flex items-center justify-center">
            <span className="text-xl md:text-2xl font-bold text-black">$</span>
          </div>
          <span className="text-3xl md:text-4xl font-bold text-gray-600">DA VEZ</span>
        </div>

        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl font-semibold text-black">
            Olá! Como você se chama?
          </h1>
          <p className="text-lg md:text-xl text-gray-700">
            Vamos personalizar sua experiência.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Digite seu nome"
            className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 text-black"
            required
          />

          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-4 px-8 rounded-lg transition-colors text-lg"
          >
            Continuar...
          </button>
        </form>
      </div>

    </div>
  );
}

export default NamePage;
