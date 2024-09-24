import Header from '../components/Header';
import { Home, User, Menu, MoreVertical, Plus } from 'lucide-react';

export default function TodoListPage() {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Header />
            {/* ナビゲーションバー */}
            <div className="bg-gray-100 text-black px-4 py-2 flex justify-between items-center">
                <Home className="w-6 h-6" />
                <div className="flex space-x-4">
                    <User className="w-6 h-6" />
                    <Menu className="w-6 h-6" />
                </div>
            </div>

            {/* セグメントコントロール */}
            <div className="flex bg-gray-100 rounded-full m-4 p-1">
                <button className="flex-1 bg-teal-500 text-white rounded-full py-2 px-4">
                    やることリスト
                </button>
                <button className="flex-1 text-gray-600 rounded-full py-2 px-4">
                    げへ
                </button>
            </div>

            {/* TODOリスト */}
            <div className="flex-1 bg-gray-100 mx-4 rounded-lg overflow-hidden">
                <div className="p-4 space-y-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                                <span className="text-gray-500">✓</span>
                            </div>
                            <div>
                                <h3 className="font-semibold">こんにちは</h3>
                                <p className="text-sm text-gray-500">てすとあいうえおおおお</p>
                                <p className="text-xs text-gray-400">明後日</p>
                            </div>
                        </div>
                        <img src="/placeholder.svg?height=32&width=32" alt="User" className="w-8 h-8 rounded-full" />
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
                                <span className="text-gray-500">✓</span>
                            </div>
                            <div>
                                <h3 className="font-semibold">めめ</h3>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center">
                                <span className="text-white">✓</span>
                            </div>
                            <div>
                                <h3 className="font-semibold">あいう</h3>
                                <p className="text-xs text-gray-400">明後日</p>
                            </div>
                        </div>
                        <img src="/placeholder.svg?height=32&width=32" alt="User" className="w-8 h-8 rounded-full" />
                    </div>
                </div>
            </div>

            {/* フローティングアクションボタン */}
            <div className="fixed bottom-20 right-4">
                <button className="bg-teal-500 text-white rounded-full p-4 shadow-lg">
                    <Plus className="w-6 h-6" />
                </button>
            </div>

            {/* 広告バナー */}
            <div className="bg-white p-4 border-t">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-xs text-gray-500">ここに広告を表示する予定</p>
                        <p className="font-semibold">ここに広告を表示する予定</p>
                    </div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm">
                        詳細 ＞
                    </button>
                </div>
            </div>
        </div>
    );
}