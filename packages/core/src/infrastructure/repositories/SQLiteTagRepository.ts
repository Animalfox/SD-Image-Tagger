import Tag from "@domain/entities/Tag";
import TagRepository from "@domain/interfaces/TagRepository";
import { Database as TDatabase } from "better-sqlite3";
import Database = require("better-sqlite3");

export default class SQLiteTagRepository implements TagRepository {
  private db: TDatabase;

  constructor(databasePath: string) {
    this.init(databasePath);
  }

  private init(databasePath: string) {
    this.db = new Database(databasePath);
    this.db.pragma("journal_mode = FULL");
    this.db.exec(`CREATE TABLE IF NOT EXISTS tags (
            name TEXT NOT NULL PRIMARY KEY
        )`);
  }

  async createTag(name: string): Promise<boolean> {
    try {
      const stmt = this.db.prepare(`INSERT INTO tags (name) VALUES (@name)`);
      stmt.run({ name });
      return true;
    } catch (error) {
      console.error("Error creating tag:", error);
      return false;
    }
  }

  async getTag(name: string): Promise<Tag | null> {
    try {
      const stmt = this.db.prepare(`SELECT * FROM tags WHERE name = ?`);
      const row = stmt.get(name) as Tag;
      if (row) {
        return new Tag(row.name);
      }
      return null;
    } catch (error) {
      console.error("Error getting tag:", error);
      return null;
    }
  }

  async updateTag(name: string): Promise<boolean> {
    throw new Error("Method not implemented.");
    /**
     * This method is temporarily not implemented because a Tag object has no
     * other properties besides name.
     *
     * Example based on id and name fields:
     *
     * try {
     *   const stmt = this.db.prepare(`UPDATE tags SET name = ? WHERE id = ?`);
     *   const info = stmt.run(name, id);
     *   return info.changes > 0;
     * } catch (error) {
     *   console.error("Error updating tag:", error);
     *   return false;
     * }
     */
  }

  async deleteTag(name: string): Promise<boolean> {
    try {
      const stmt = this.db.prepare(`DELETE FROM tags WHERE name = ?`);
      const info = stmt.run(name);
      return info.changes > 0;
    } catch (error) {
      console.error("Error deleting tag:", error);
      return false;
    }
  }
}
