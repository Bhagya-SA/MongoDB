# MongoDB Examples 🚀

This repository contains **MongoDB examples** from **Basics to Advanced** for a Student Database.  
It is designed for learning and practicing MongoDB queries step by step.

---

## **Repository Structure**

### **01_Basics**
Covers fundamental operations:
- `create_database.js` → Create and switch databases  
- `create_collection.js` → Create collections (tables equivalent)  
- `insert_documents.js` → Insert multiple documents  
- `find_documents.js` → Query documents with filters  
- `update_delete.js` → Update and delete documents  
- `constraints_indexes.js` → Create unique constraints and indexes  

### **02_Intermediate**
Covers intermediate operations:
- `queries_aggregation.js` → Aggregation operations like `$group` and `$sum`  
- `joins_lookup.js` → Join collections using `$lookup`  
- `group_by.js` → Group data by fields  
- `projections.js` → Select specific fields  
- `subqueries.js` → Use nested queries  
- `indexes.js` → Create indexes for performance  

### **03_Advanced**
Covers advanced operations:
- `transactions.js` → Multi-document transactions for atomic operations  
- `triggers_change_streams.js` → Change streams to watch collection changes  
- `user_privileges.js` → Create users and manage roles  
- `performance_tuning.js` → Explain queries and optimize with indexes  
- `mongo_views.js` → Create and use MongoDB views  

---

## **How to Use**
1. Install MongoDB on your system or use MongoDB Atlas cloud service.  
2. Open **Mongo Shell** or **MongoDB Compass**.  
3. Navigate to the project folder and run the scripts step by step:
```bash
mongo < 01_Basics/create_database.js
mongo < 01_Basics/create_collection.js
mongo < 01_Basics/insert_documents.js
