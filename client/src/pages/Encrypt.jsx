import EncryptForm from '../components/EncryptForm';

export default function Encrypt() {
  return (
    <div className="min-h-screen bg-gray-600  px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <EncryptForm />
      </div>
    </div>
  );
}