import CreateGroupForm from './CreateGroupForm';

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col">
      <div className="bg-teal-500 text-white text-center py-4 text-2xl font-bold">
        みんなのTodo
      </div>
      <div className="flex-grow flex flex-col justify-center px-4 py-6 sm:px-0">
        <CreateGroupForm />
      </div>
    </div>
  );
}
