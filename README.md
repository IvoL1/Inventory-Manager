# 🚀 Backend Planning

## 1. 📋 System Features

### 🛍️ Product Management

- ✅ Create products
- ✅ Read/List products
- ✅ Update products
- ✅ Delete products (soft delete)
- 🔍 Search products (by name, SKU, category)

### 🔒 Permission System

| Status     | Description                                   |
| ---------- | --------------------------------------------- |
| `active`   | ✅ Normal product, visible everywhere         |
| `inactive` | ⚠️ Temporarily disabled (maintenance, errors) |
| `deleted`  | ❌ Removed from system (admin/manager only)   |

### 👥 User Roles & Permissions

| Role              | Permissions                                                                                      |
| ----------------- | ------------------------------------------------------------------------------------------------ |
| **Employee**      | 📝 CREATE, READ, UPDATE products<br>⚠️ Can mark as `inactive`<br>❌ Cannot mark as `deleted`     |
| **Manager/Admin** | 🔧 All employee permissions<br>❌ Can mark as `deleted`<br>✅ Can reactivate `inactive` products |

---

## 2. 🗃️ Database Schema

### 👤 **employees**

```sql
- id                 (Primary Key)
- name               (varchar)
- email              (varchar, unique)
- password           (varchar, hashed)
- phone              (varchar)
- role               (enum: "admin", "employee")
- hire_date          (date)
- status             (enum: "active", "inactive")
- email_verified     (boolean)
- created_at         (timestamp)
- updated_at         (timestamp)
```

### 📦 **products**

```sql
- id                 (Primary Key)
- product_name       (varchar)
- sku                (varchar, unique)
- category           (varchar)
- quantity           (integer)
- price              (decimal)
- low_stock_threshold (integer)
- status             (enum: "active", "inactive", "deleted")
- created_by         (FK -> employees.id)
- updated_by         (FK -> employees.id)
- created_at         (timestamp)
- updated_at         (timestamp)
```

### 📊 **product_history**

```sql
- id                 (Primary Key)
- product_id         (FK -> products.id)
- employee_id        (FK -> employees.id)
- action_type        (enum: "CREATE", "UPDATE", "DELETE")
- field_changed      (varchar)
- old_value          (text)
- new_value          (text)
- timestamp          (timestamp)
- notes              (text, optional)
```

## 📦 **Categories:**

```sql
category (enum:
  "electronics",
  "clothing",
  "food",
  "health",
  "home",
  "sports",
  "automotive",
  "miscellaneous"
)
```

---

## 3. 📈 Dashboard Metrics

| Metric                       | Description                  |
| ---------------------------- | ---------------------------- |
| 📊 **Total Products**        | Count of all active products |
| 💰 **Total Value**           | Sum of (quantity × price)    |
| ⚠️ **Low Stock**             | Products below threshold     |
| ❌ **Out of Stock**          | Products with quantity = 0   |
| 📂 **Category Distribution** | Products grouped by category |
