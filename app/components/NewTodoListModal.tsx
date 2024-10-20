import React from 'react';
import { X } from 'lucide-react';

interface NewTodoListModalProps {
    isOpen: boolean;
    onClose: () => void;
    newCategoryName: string;
    onNewCategoryNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onAddNewCategory: () => void;
}

const NewTodoListModal: React.FC<NewTodoListModalProps> = ({
    isOpen,
    onClose,
    newCategoryName,
    onNewCategoryNameChange,
    onAddNewCategory
}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 w-full max-w-sm">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-gray-800">新しいTodoリスト</h2>
                    <X className="w-6 h-6 text-gray-600 cursor-pointer" onClick={onClose} />
                </div>
                <input
                    type="text"
                    value={newCategoryName}
                    onChange={onNewCategoryNameChange}
                    placeholder="Todoリスト名を入力"
                    className="w-full p-2 border border-gray-300 rounded mb-4 text-gray-800"
                />
                <button
                    onClick={onAddNewCategory}
                    className="w-full bg-teal-500 text-white py-2 rounded"
                >
                    追加
                </button>
            </div>
        </div>
    );
};

export default NewTodoListModal;
