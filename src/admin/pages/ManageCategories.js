// src/admin/pages/ManageCategories.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AdminLayout from '../components/AdminLayout';
import { fetchCategoriesAsync, addCategoryAsync, updateCategoryAsync, deleteCategoryAsync, setCurrentPage } from '../../reducers/categorySlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManageCategories = () => {
  const dispatch = useDispatch();
  const { categories, currentPage, totalPages, status, error } = useSelector(state => state.categories);
  const [newCategory, setNewCategory] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [editingCategory, setEditingCategory] = useState(null);
  const [editCategoryName, setEditCategoryName] = useState('');
  const [editCategoryDescription, setEditCategoryDescription] = useState('');

  // Fetch categories when currentPage changes
  useEffect(() => {
    if (status !== 'loading') {
      dispatch(fetchCategoriesAsync({ page: currentPage - 1, size: 5 }));
    }
  }, [dispatch, currentPage]);

  // Show error toast if status is failed
  useEffect(() => {
    if (status === 'failed') {
      toast.error(error);
    }
  }, [status, error]);

  const handleAddCategory = () => {
    if (newCategory.trim() === '' || newDescription.trim() === '') return;
    dispatch(addCategoryAsync({ categoryName: newCategory, description: newDescription }))
      .unwrap()
      .then(() => {
        setNewCategory('');
        setNewDescription('');
        toast.success('Category added successfully');
      })
      .catch((error) => {
        toast.error('Tên Danh mục đã tồn tại');
      });
  };

  const handleEditCategory = (category) => {
    setEditingCategory(category.categoryId);
    setEditCategoryName(category.categoryName);
    setEditCategoryDescription(category.description);
  };

  const handleUpdateCategory = () => {
    if (editCategoryName.trim() === '' || editCategoryDescription.trim() === '') return;
    dispatch(updateCategoryAsync({ categoryId: editingCategory, categoryName: editCategoryName, description: editCategoryDescription }))
      .unwrap()
      .then(() => {
        setEditingCategory(null);
        setEditCategoryName('');
        setEditCategoryDescription('');
        toast.success('Category updated successfully');
      })
      .catch((error) => {
        toast.error('Failed to update category');
      });
  };

  const handleDeleteCategory = (categoryId) => {
    dispatch(deleteCategoryAsync(categoryId))
      .unwrap()
      .then(() => {
        toast.success('Category deleted successfully');
      })
      .catch((error) => {
        toast.error('Failed to delete category');
      });
  };

  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <AdminLayout>
      <div className="p-6 bg-gray-800 text-white">
        <ToastContainer />
        <h2 className="text-2xl font-bold mb-6">Manage Categories</h2>
        <div className="mb-4">
          <input
            type="text"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
            placeholder="New Category"
            className="px-3 py-2 rounded-l-md text-black"
          />
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            placeholder="Description"
            className="px-3 py-2 text-black"
          />
          <button
            onClick={handleAddCategory}
            className="bg-blue-500 text-white px-4 py-2 rounded-r-md"
          >
            Add
          </button>
        </div>
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
          <table className="min-w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">Category Name</th>
                <th className="px-4 py-2">Description</th>
                <th className="px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category, index) => (
                <tr key={index} className="bg-gray-800">
                  <td className="border px-4 py-2">
                    {editingCategory === category.categoryId ? (
                      <input
                        type="text"
                        value={editCategoryName}
                        onChange={(e) => setEditCategoryName(e.target.value)}
                        className="px-3 py-2 rounded-md text-black"
                      />
                    ) : (
                      category.categoryName
                    )}
                  </td>
                  <td className="border px-4 py-2">
                    {editingCategory === category.categoryId ? (
                      <input
                        type="text"
                        value={editCategoryDescription}
                        onChange={(e) => setEditCategoryDescription(e.target.value)}
                        className="px-3 py-2 rounded-md text-black"
                      />
                    ) : (
                      category.description
                    )}
                  </td>
                  <td className="border px-4 py-2 flex space-x-2">
                    {editingCategory === category.categoryId ? (
                      <button
                        onClick={handleUpdateCategory}
                        className="bg-green-500 text-white px-4 py-2 rounded-md"
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        onClick={() => handleEditCategory(category)}
                        className="bg-yellow-500 text-white px-4 py-2 rounded-md"
                      >
                        Edit
                      </button>
                    )}
                    <button
                      onClick={() => handleDeleteCategory(category.categoryId)}
                      className="bg-red-500 text-white px-4 py-2 rounded-md"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="flex justify-between mt-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="bg-gray-500 text-white px-4 py-2 rounded-md disabled:opacity-50"
            >
              Previous
            </button>
            <span>Page {currentPage} of {totalPages}</span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="bg-gray-500 text-white px-4 py-2 rounded-md disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default ManageCategories;
