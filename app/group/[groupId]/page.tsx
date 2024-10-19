import Header from '@/app/components/Header';
import { Pencil, SmilePlus, AlignJustify, Trash2, MoreVertical, Plus } from "lucide-react"
import Image from "next/image"

export default function GroupConfirmation({ params }: { params: { groupId: string } }) {
    return (
        <div className="flex flex-col h-screen bg-teal-500 text-white font-sans">
            <Header />

            {/* Navigation */}
            <div className="flex items-center px-4 py-2">
                <Pencil className="w-8 h-8 mr-4" />
                <div className="bg-white text-teal-500 px-6 py-2 rounded-full font-bold">
                    やることリスト
                </div>
                <div className="flex-grow"></div>
                <div className="flex space-x-4">
                    <SmilePlus className="w-8 h-8" />
                    <AlignJustify className="w-8 h-8" />
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 bg-white rounded-t-3xl mt-4 p-4 overflow-y-auto">
                <div className="flex justify-end mb-4">
                    <Trash2 className="w-6 h-6 text-gray-400 mr-2" />
                    <MoreVertical className="w-6 h-6 text-gray-400" />
                </div>

                {/* Todo Items */}
                {[1, 2, 3].map((item) => (
                    <div key={item} className="flex items-start mb-4">
                        <div className="w-6 h-6 rounded-full border-2 border-gray-300 mr-4 mt-1"></div>
                        <div className="flex-1">
                            <p className="text-black text-sm mb-1">
                                {item === 1 ? "右上のメニューからカテゴリの追加・" : ""}
                                {item === 2 ? "左上メニュー内の招待ボタンからパー" : ""}
                                {item === 3 ? "便利な使い方はこちら↓" : ""}
                            </p>
                            <p className="text-black text-sm">
                                {item === 1 ? "編集ができます。「買い物リスト」な" : ""}
                                {item === 2 ? "トナーを招待しましょう👍" : ""}
                                {item === 3 ? "https://familytodo.notion.site/familytod..." : ""}
                            </p>
                        </div>
                        <Image
                            src="/placeholder.svg"
                            width={40}
                            height={40}
                            alt="Avatar"
                            className="rounded-full"
                        />
                    </div>
                ))}

                {/* Blue Section */}
                <div className="bg-[#4A90E2] rounded-lg p-4 mb-4">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-white">ファミリーToDo</span>
                        <span className="text-white text-xs">今</span>
                    </div>
                    <p className="text-white text-sm mb-2">パパがタスクを完了しました</p>
                    <p className="text-white text-sm">牛肉</p>
                    <div className="flex justify-between mt-2">
                        <Image
                            src="/placeholder.svg"
                            width={100}
                            height={180}
                            alt="App Screenshot 1"
                            className="rounded-lg"
                        />
                        <Image
                            src="/placeholder.svg"
                            width={100}
                            height={180}
                            alt="App Screenshot 2"
                            className="rounded-lg"
                        />
                    </div>
                </div>

                {/* App Usage Section */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
                        <div className="w-2 h-2 rounded-full bg-blue-500 mr-2"></div>
                        <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                        <span className="text-black text-sm">アプリの使い方</span>
                    </div>
                    <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>
            </div>

            {/* Add Button */}
            <div className="absolute bottom-4 right-4">
                <button className="bg-teal-500 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg">
                    <Plus className="w-8 h-8" />
                </button>
            </div>
        </div>
    );
}
