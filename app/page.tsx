import Header from './components/Header';
import CreateGroupForm from './CreateGroupForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col">
      <Header />
      <div className="flex-grow flex flex-col justify-center px-4 py-6 sm:px-0">
        <CreateGroupForm />
      </div>
    </div>
  );
}
