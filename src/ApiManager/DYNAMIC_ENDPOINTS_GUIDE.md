# Dynamic Endpoints Guide

This document explains how to manage dynamic endpoints in the application, particularly for APIs like `https://dummyjson.com/products?limit=10&skip=10&select=title,price`.

## Overview

The application now supports dynamic endpoint parameters through:

1. Enhanced endpoint configuration in `endpoint.jsx`
2. Updated service methods in `ProductService.js`
3. Parameter management in components

## Endpoint Configuration

The `ENDPOINTS.PRODUCTS.WITH_PARAMS` function allows dynamic parameter building:

```javascript
WITH_PARAMS: (params) => {
  let url = "/products";
  const queryParams = [];
  
  if (params.limit) queryParams.push(`limit=${params.limit}`);
  if (params.skip) queryParams.push(`skip=${params.skip}`);
  if (params.select) queryParams.push(`select=${params.select}`);
  if (params.category) queryParams.push(`category=${params.category}`);
  if (params.q) queryParams.push(`q=${params.q}`);
  
  if (queryParams.length > 0) {
    url += `?${queryParams.join("&")}`;
  }
  
  return url;
}
```

## Usage Examples

### 1. Basic Usage in Components

```javascript
import { productService } from '../ApiServices/ProductService';

// Fetch products with specific parameters
const params = {
  limit: 10,
  skip: 20,
  select: 'title,price,thumbnail',
  category: 'laptops',
  q: 'macbook'
};

const data = await productService.getAllWithParams(params);
```

### 2. Parameter Structure

- `limit`: Number of items to return
- `skip`: Number of items to skip (for pagination)
- `select`: Comma-separated list of fields to return
- `category`: Filter by category
- `q`: Search query

### 3. State Management Pattern

```javascript
const [pagination, setPagination] = useState({
  limit: 10,
  skip: 0,
  total: 0,
  page: 1,
  totalPages: 0,
});

const [filters, setFilters] = useState({
  select: 'title,price,thumbnail',
  category: '',
  q: '',
});

// Combine parameters before API call
const params = {
  ...filters,
  limit: pagination.limit,
  skip: (pagination.page - 1) * pagination.limit,
};
```

### 4. Real-world Example

In the Products component, you can:

- Change fields to select using `changeSelectFields()`
- Adjust pagination with `updatePagination()`
- Modify page size with `changeLimit()`
- Filter with search terms using `updateFilters()`

## Advanced Usage

### Creating Custom Parameter Functions

You can create custom functions to handle specific parameter combinations:

```javascript
const fetchFeaturedProducts = async () => {
  const params = {
    limit: 8,
    skip: 0,
    select: 'title,price,thumbnail,rating',
    q: 'featured'
  };
  
  return await productService.getAllWithParams(params);
};
```

### Handling Different API Endpoints

The pattern can be extended to other endpoints by adding similar functions to the endpoint configuration:

```javascript
USERS: {
  // ... existing endpoints
  WITH_PARAMS: (params) => {
    // Similar implementation for user endpoints
  }
}
```

## Best Practices

1. **Default Values**: Always provide sensible defaults for parameters
2. **Validation**: Validate parameter values before making API calls
3. **State Synchronization**: Keep UI controls synchronized with parameter state
4. **Error Handling**: Include proper error handling for API calls
5. **Loading States**: Show loading indicators during API requests
6. **Parameter Persistence**: Consider saving user preferences for parameters

## Common Patterns

### 1. Search and Filter
```javascript
const handleSearch = (searchTerm) => {
  updateFilters({ q: searchTerm, page: 1 });
};
```

### 2. Pagination
```javascript
const handlePageChange = (newPage) => {
  setPagination(prev => ({ ...prev, page: newPage }));
};
```

### 3. Field Selection
```javascript
const handleFieldChange = (selectedFields) => {
  updateFilters({ select: selectedFields });
};
```

This system provides a flexible, reusable way to handle dynamic API endpoints with various parameters while maintaining clean, maintainable code.