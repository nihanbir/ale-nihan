import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import {userController, type PredefinedUser, type RsvpStatus, predefinedUsers} from '../data/predefinedUsers';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

export default function AdminPage() {
    const { user } = useAuth();
    const [users, setUsers] = useState<PredefinedUser[]>(userController.getUsers());
    const [newUser, setNewUser] = useState<Omit<PredefinedUser, 'rsvp'>>({
        username: '',
        name: '',
        pin: '',
        country: '',
        hasSetPin: false,
        isAdmin: false
    });

    // Redirect non-admins
    useEffect(() => {
        if (!user?.isAdmin) {
            window.location.href = '/ale-nihan/';
        }
    }, [user]);

    // Add new user
    const handleAddUser = () => {
        try {
            const userToAdd: PredefinedUser = {
                ...newUser,
                rsvp: { status: 'Pending' },
                hasSetPin: !!newUser.pin,
                pin: newUser.pin || undefined
            };

            // Add to both predefinedUsers and localStorage
            predefinedUsers.push(userToAdd); // Add to memory array
            const updatedUsers = userController.addUser(userToAdd);
            setUsers(updatedUsers);

            toast({
                title: "Success",
                description: `User ${userToAdd.username} created successfully`,
                variant: "default",
            });

            // Reset form
            setNewUser({
                username: '',
                name: '',
                pin: '',
                country: '',
                hasSetPin: false,
                isAdmin: false
            });
        } catch (error) {
            toast({
                title: "Error",
                description: error instanceof Error ? error.message : "Failed to create user",
                variant: "destructive",
            });
        }
    };

    // Delete user
    const handleDelete = (username: string) => {
        const updatedUsers = userController.deleteUser(username);
        setUsers(updatedUsers);
        toast({
            title: "User Deleted",
            description: `User ${username} has been removed`,
            variant: "default",
        });
    };

    // Update RSVP status
    const handleRsvpChange = (username: string, status: RsvpStatus) => {
        const updatedUsers = userController.updateUser(username, {
            rsvp: { status }
        });
        setUsers(updatedUsers);
    };

    // Toggle PIN status
    const togglePinStatus = (username: string) => {
        const user = users.find(u => u.username === username);
        if (user) {
            const updatedUsers = userController.updateUser(username, {
                hasSetPin: !user.hasSetPin
            });
            setUsers(updatedUsers);
        }
    };
    // Reset to default users
    const handleResetToDefaults = () => {
        if (confirm('Are you sure you want to reset all users to defaults? This cannot be undone.')) {
            const defaultUsers = userController.resetToDefaults();
            setUsers(defaultUsers);
            toast({
                title: "Reset Complete",
                description: "All users have been reset to defaults",
                variant: "default",
            });
        }
    };

    if (!user?.isAdmin) return null;

    return (
        <div className="p-8 max-w-6xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>

            {/* Add User Form */}
            <div className="bg-gray-50 p-4 rounded-lg mb-8">
                <div className="flex justify-between items-center mb-4">
                    <Button
                        variant="destructive"
                        onClick={handleResetToDefaults}
                        className="ml-4"
                    >
                        Reset to Defaults
                    </Button>
                </div>
                <h2 className="text-xl font-semibold mb-4">Add New User</h2>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    <input
                        type="text"
                        placeholder="Username"
                        value={newUser.username}
                        onChange={(e) => setNewUser({...newUser, username: e.target.value})}
                        className="p-2 border rounded"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={newUser.name}
                        onChange={(e) => setNewUser({...newUser, name: e.target.value})}
                        className="p-2 border rounded"
                        required
                    />
                    <input
                        type="text"
                        placeholder="PIN"
                        value={newUser.pin}
                        onChange={(e) => setNewUser({...newUser, pin: e.target.value})}
                        className="p-2 border rounded"
                    />
                    <input
                        type="text"
                        placeholder="Country"
                        value={newUser.country}
                        onChange={(e) => setNewUser({...newUser, country: e.target.value})}
                        className="p-2 border rounded"
                    />
                    <div className="flex items-center">
                        <input
                            id="isAdmin"
                            type="checkbox"
                            checked={newUser.isAdmin}
                            onChange={(e) => setNewUser({...newUser, isAdmin: e.target.checked})}
                            className="mr-2"
                        />
                        <label htmlFor="isAdmin">Admin</label>
                    </div>
                </div>
                <button
                    onClick={handleAddUser}
                    disabled={!newUser.username || !newUser.name}
                    className={`mt-4 px-4 py-2 rounded ${
                        !newUser.username || !newUser.name
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-green-600 text-white'
                    }`}
                >
                    Add User
                </button>
            </div>

            {/* Users Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border">
                    <thead>
                    <tr className="bg-gray-100">
                        <th className="p-3 border">Username</th>
                        <th className="p-3 border">Name</th>
                        <th className="p-3 border">Country</th>
                        <th className="p-3 border">PIN Set</th>
                        <th className="p-3 border">Admin</th>
                        <th className="p-3 border">RSVP</th>
                        <th className="p-3 border">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user) => (
                        <tr key={user.username} className="border hover:bg-gray-50">
                            <td className="p-3 border">{user.username}</td>
                            <td className="p-3 border">{user.name}</td>
                            <td className="p-3 border">{user.country}</td>
                            <td className="p-3 border">
                                <button
                                    onClick={() => togglePinStatus(user.username)}
                                    className={`px-2 py-1 rounded text-xs ${
                                        user.hasSetPin
                                            ? 'bg-green-100 text-green-800'
                                            : 'bg-red-100 text-red-800'
                                    }`}
                                >
                                    {user.hasSetPin ? '✅ Yes' : '❌ No'}
                                </button>
                            </td>
                            <td className="p-3 border">
                                {user.isAdmin ? '✅' : '❌'}
                            </td>
                            <td className="p-3 border">
                                <select
                                    value={user.rsvp?.status || 'Pending'}
                                    onChange={(e) => handleRsvpChange(
                                        user.username,
                                        e.target.value as RsvpStatus
                                    )}
                                    className="p-1 border rounded text-sm"
                                >
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                    <option value="Pending">Pending</option>
                                </select>
                            </td>
                            <td className="p-3 border">
                                <button
                                    onClick={() => handleDelete(user.username)}
                                    className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-xs"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}