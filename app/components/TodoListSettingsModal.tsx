import React from 'react';
import { X, Edit, Trash2 } from 'lucide-react';

interface TodoListSettingsModalProps {
    isOpen: boolean;
    onClose: () => void;
    todoLists: { id: string; listName: string }[];
    onEditCategory: (id: string, name: string) => void;
    onDeleteCategory: (id: string) => Promise<void>;
    onAddNewCategory: () => void;
}

const TodoListSettingsModal: React.FC<TodoListSettingsModalProps> = ({
    isOpen,
    onClose,
    todoLists,
    onEditCategory,
    onDeleteCategory,
    onAddNewCategory
}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 w-full max-w-sm">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold text-gray-800">Todoリスト設定</h2>
                    <X className="w-6 h-6 text-gray-600 cursor-pointer" onClick={onClose} />
                </div>
                <ul className="space-y-2 mb-4">
                    {todoLists.map((todoList) => (
                        <li key={todoList.id} className="bg-gray-100 rounded-lg p-2 text-gray-800 flex items-center justify-between">
                            <span>{todoList.listName}</span>
                            <div>
                                <button onClick={() => onEditCategory(todoList.id, todoList.listName)} className="text-blue-500 mr-2">
                                    <Edit className="w-4 h-4" />
                                </button>
                                <button onClick={() => onDeleteCategory(todoList.id)} className="text-red-500">
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
                <button
                    onClick={onAddNewCategory}
                    className="w-full bg-teal-500 text-white py-2 rounded"
                >
                    新しいTodoリストを追加
                </button>
            </div>
        </div>
    );
};

export default TodoListSettingsModal;
