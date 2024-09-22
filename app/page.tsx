import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col">
      <div className="bg-teal-500 text-white text-center py-4 text-2xl font-bold">
        みんなでTodo
      </div>
      <div className="flex-grow flex flex-col justify-center px-4 py-6 sm:px-0">
        <form className="space-y-4 max-w-md w-full mx-auto">
          <div>
            <label htmlFor="groupName" className="block text-sm font-medium text-gray-700 mb-1">
              グループ名
            </label>
            <input
              type="text"
              id="groupName"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
              placeholder="北海道旅行"
            />
          </div>
          <div>
            <label htmlFor="memberName" className="block text-sm font-medium text-gray-700 mb-1">
              メンバー名
            </label>
            <div className="flex">
              <input
                type="text"
                id="memberName"
                className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                placeholder="あおい"
              />
              <button
                type="button"
                className="bg-teal-500 text-white px-3 py-2 rounded-r-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 text-sm"
              >
                追加
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-teal-500 text-white py-3 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 text-sm font-medium mt-6"
          >
            グループを作成
          </button>
        </form>
      </div>
    </div>
  );
}
