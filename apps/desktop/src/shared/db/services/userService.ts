// src/shared/db/services/userService.ts
import { db } from '../index';
import { users } from '../schema';
import { eq } from 'drizzle-orm';

export const userService = {
  // Create a new user
  async createUser(userData: { id: string; email: string; name?: string }) {
    return db.insert(users).values(userData).returning();
  },
  
  // Get user by ID
  async getUserById(id: string) {
    return db.select().from(users).where(eq(users.id, id)).get();
  },
  
  // Update user
  async updateUser(id: string, userData: Partial<{ email: string; name: string }>) {
    return db.update(users)
      .set({ ...userData, updatedAt: Date.now() })
      .where(eq(users.id, id))
      .returning();
  },
  
  // Delete user
  async deleteUser(id: string) {
    return db.delete(users).where(eq(users.id, id));
  },
  
  // List all users
  async listUsers() {
    return db.select().from(users).all();
  }
};