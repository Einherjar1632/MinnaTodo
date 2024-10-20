import React, { useState } from 'react';
import { X, Edit, Trash2, Check } from 'lucide-react';

interface TodoListSettingsModalProps {
    isOpen: boolean;
    onClose: () => void;
    todoLists: { id: string; listName: string }[];
    onEditCategory: (id: string, newName: string) => Promise<void>;
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
    const [editingId, setEditingId] = useState<string | null>(null);
    const [editingName, setEditingName] = useState('');

    if (!isOpen) return null;

    const startEditing = (id: string, name: string) => {
        setEditingId(id);
        setEditingName(name);
    };

    const saveEdit = async () => {
        if (editingId && editingName.trim()) {
            await onEditCategory(editingId, editingName.trim());
            setEditingId(null);
            setEditingName('');
        }
    };

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
                            {editingId === todoList.id ? (
                                <>
                                    <input
                                        type="text"
                                        value={editingName}
                                        onChange={(e) => setEditingName(e.target.value)}
                                        className="flex-grow mr-2 p-1 border rounded"
                                    />
                                    <button onClick={saveEdit} className="text-green-500 mr-2">
                                        <Check className="w-4 h-4" />
                                    </button>
                                </>
                            ) : (
                                <>
                                    <span>{todoList.listName}</span>
                                    <div>
                                        <button onClick={() => startEditing(todoList.id, todoList.listName)} className="text-blue-500 mr-2">
                                            <Edit className="w-4 h-4" />
                                        </button>
                                        <button onClick={() => onDeleteCategory(todoList.id)} className="text-red-500">
                                            <Trash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </>
                            )}
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
