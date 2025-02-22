import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

// Users table
export const users = sqliteTable('users', {
  id: text('id').primaryKey(),
  email: text('email').notNull().unique(),
  name: text('name'),
  createdAt: integer('created_at').notNull().default(Math.floor(Date.now() / 1000)), // Store Unix timestamp (seconds)
  updatedAt: integer('updated_at').notNull().default(Math.floor(Date.now() / 1000)),
});

// User settings table
export const userSettings = sqliteTable('user_settings', {
  userId: text('user_id').references(() => users.id).notNull(),
  theme: text('theme').default('light'),
  language: text('language').default('en'),
  updatedAt: integer('updated_at').notNull().default(Math.floor(Date.now() / 1000)),
});
