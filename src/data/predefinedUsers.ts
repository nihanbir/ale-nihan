export type RsvpStatus = "Yes" | "No" | "Pending";
export type RsvpDetails = {
    status: RsvpStatus;
    dietaryRequirements?: string;
    plusOne?: boolean;
};
export type PredefinedUser = {
    username: string;
    name: string;
    pin?: string;
    country: string;
    hasSetPin: boolean;
    isAdmin?: boolean;
    rsvp?: RsvpDetails;
};

export const predefinedUsers: PredefinedUser[] = [
    { username: 'john.smith', name: 'John Smith', hasSetPin: false, country: 'TR' },
    { username: 'john.poo', name: 'John poo', pin: "1234", country: 'TR', hasSetPin: true, isAdmin: true },
    { username: 'dum.poo', name: 'dum poo', hasSetPin: false, country: 'TR' },
    {
        username: "nihan.bir",
        name: "Nihan",
        pin: "1234",
        country: "Turkey",
        hasSetPin: true,
        isAdmin: true,
        rsvp: {
            status: "Yes",
            dietaryRequirements: "None",
            plusOne: true
        }
    },
];

// Helper function for localStorage operations with error handling
const withLocalStorage = <T>(operation: () => T, fallback: T): T => {
    try {
        return operation();
    } catch (error) {
        console.error('LocalStorage operation failed:', error);
        return fallback;
    }
};

// Create a controller for state management
export const userController = {
    getUsers: (): PredefinedUser[] => {
        return withLocalStorage(() => {
            const users = localStorage.getItem('users');
            return users ? JSON.parse(users) : [...predefinedUsers];
        }, [...predefinedUsers]);
    },

    addUser: (user: PredefinedUser): PredefinedUser[] => {
        return withLocalStorage(() => {
            const users = userController.getUsers();
            if (users.some(u => u.username === user.username)) {
                throw new Error('User already exists');
            }
            const updatedUsers = [...users, user];
            localStorage.setItem('users', JSON.stringify(updatedUsers));
            return updatedUsers;
        }, userController.getUsers());
    },

    deleteUser: (username: string): PredefinedUser[] => {
        return withLocalStorage(() => {
            const users = userController.getUsers();
            const updatedUsers = users.filter(u => u.username !== username);
            localStorage.setItem('users', JSON.stringify(updatedUsers));

            // Also remove from currentUser if deleted user was logged in
            const currentUser = localStorage.getItem('currentUser');
            if (currentUser && JSON.parse(currentUser).username === username) {
                localStorage.removeItem('currentUser');
            }

            return updatedUsers;
        }, userController.getUsers());
    },

    updateUser: (username: string, updates: Partial<PredefinedUser>): PredefinedUser[] => {
        return withLocalStorage(() => {
            const users = userController.getUsers();
            const updatedUsers = users.map(u =>
                u.username === username ? { ...u, ...updates } : u
            );
            localStorage.setItem('users', JSON.stringify(updatedUsers));

            // Update currentUser if it's the same user
            const currentUser = localStorage.getItem('currentUser');
            if (currentUser && JSON.parse(currentUser).username === username) {
                const updatedUser = { ...JSON.parse(currentUser), ...updates };
                localStorage.setItem('currentUser', JSON.stringify(updatedUser));
            }

            return updatedUsers;
        }, userController.getUsers());
    },

    resetToDefaults: (): PredefinedUser[] => {
        return withLocalStorage(() => {
            localStorage.setItem('users', JSON.stringify([...predefinedUsers]));
            return [...predefinedUsers];
        }, userController.getUsers());
    },

    // Additional helper function to check if user exists
    userExists: (username: string): boolean => {
        return withLocalStorage(() => {
            const users = userController.getUsers();
            return users.some(user => user.username === username);
        }, false);
    },
    
    isValidPin: (pin: string): boolean => {
        return /^\d{4}$/.test(pin);
    },

    isFirstLogin: (username: string): boolean => {
        const users = userController.getUsers();
        const user = users.find(u => u.username === username);
        return user ? !user.hasSetPin : false;
    },

    setInitialPin: (username: string, pin: string): Promise<boolean> => {
        return new Promise((resolve) => {
            try {
                if (!userController.isValidPin(pin)) {
                    resolve(false);
                    return;
                }

                const users = userController.getUsers();
                const userIndex = users.findIndex(u => u.username === username);

                if (userIndex === -1) {
                    resolve(false);
                    return;
                }

                const updatedUser = {
                    ...users[userIndex],
                    pin,
                    hasSetPin: true
                };

                userController.updateUser(username, {
                    pin,
                    hasSetPin: true
                });

                resolve(true);
            } catch (error) {
                console.error('Error setting initial PIN:', error);
                resolve(false);
            }
        });
    },

    authenticateUser: (username: string, pin: string): Promise<PredefinedUser | null> => {
        return new Promise((resolve) => {
            try {
                const users = userController.getUsers();
                const user = users.find(u => u.username === username);

                if (!user) {
                    resolve(null);
                    return;
                }

                if (!user.hasSetPin) {
                    resolve(user);
                    return;
                }

                if (user.pin === pin) {
                    resolve(user);
                } else {
                    resolve(null);
                }
            } catch (error) {
                console.error('Authentication error:', error);
                resolve(null);
            }
        });
    }
};

if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify(predefinedUsers));
}