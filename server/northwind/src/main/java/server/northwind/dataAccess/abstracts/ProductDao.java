package kodlamaio.northwind.dataAccess.abstracts;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import kodlamaio.northwind.entities.concretes.Product;
import kodlamaio.northwind.entities.dtos.ProductWithCategoryDto;

public interface ProductDao extends JpaRepository<Product, Integer>{
	List<Product> getByCategoryId(int id);
	Product getById(int id);
	
//	Product getByProductName(String productName);
//	
//	Product getByProductNameAndCategory_CategoryId(String productName, int categoryId);
//	
//	List<Product> getByProductNameOrCategory_CategoryId(String productName, int categoryId);
//	
//	List<Product> getByCategory_CategoryIdIn(List<Integer> categories);
//	
//	List<Product> getByProductNameContains(String productName);
//	
//	List<Product> getByCategory_CategoryId(int categoryId);
//	
//	List<Product> getByProductNameStartsWith(String productName);
//	
//	@Query("From Product where productname=:productName and categoryID=:categoryId")
//	List<Product> getByNameAndCategory(String productName, int categoryId);
//	
//	@Query("Select new kodlamaio.northwind.entities.dtos.ProductWithCategoryDto"
//			+ "(p.id, p.productName, c.categoryName) From Category c Inner Join c.products p")
//	List<ProductWithCategoryDto> getProductWithCategoryDetails();
}
