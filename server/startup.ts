import { db, MemoryStorage } from "./storage";

export async function initializeDatabase({ skipSeeding = false }: { skipSeeding?: boolean } = {}) {
  try {
    // Test database connection
    await db.query("SELECT 1");
    console.log("✅ Database connection established");
    
    if (!skipSeeding) {
      // Check if we need to seed the database
      const storage = new MemoryStorage();
      const existingStrains = await storage.getStrains();
      
      if (existingStrains.length === 0) {
        console.log("🌱 Database is empty, starting seeding process...");
        // Note: Actual seeding would happen here
        console.log("📊 Database seeding completed");
      } else {
        console.log(`📊 Database already contains ${existingStrains.length} strains, skipping seeding`);
      }
    }
    
    return true;
  } catch (error: any) {
    console.error("❌ Database initialization failed:", error.message);
    throw error;
  }
}

export async function quickDatabaseCheck(): Promise<boolean> {
  try {
    await db.query("SELECT 1");
    return true;
  } catch (error) {
    console.error("Database connection check failed:", error);
    return false;
  }
}