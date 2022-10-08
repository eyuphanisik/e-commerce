package kodlamaio.northwind.business.concretes;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import kodlamaio.northwind.business.abstracts.ProductService;
import kodlamaio.northwind.core.utilities.results.DataResult;
import kodlamaio.northwind.core.utilities.results.Result;
import kodlamaio.northwind.core.utilities.results.SuccessDataResult;
import kodlamaio.northwind.core.utilities.results.SuccessResult;
import kodlamaio.northwind.dataAccess.abstracts.ProductDao;
import kodlamaio.northwind.entities.concretes.Product;


@Service
public class ProductManager implements ProductService{
	private ProductDao productDao;
	
	@Autowired
	public ProductManager(ProductDao productDao) {
		this.productDao = productDao;
	}

	@Override
	public DataResult<List<Product>> getAll() {
		return new SuccessDataResult<List<Product>>(productDao.findAll(), "kayıtlar listelendi");
	}

	@Override
	public Result add(Product product) {
		this.productDao.save(product);
		return new SuccessResult("Product nesnesi eklendi");
	}

	@Override
	public Result deleteProduct(int id) {
		this.productDao.delete(this.productDao.getById(id));
		return new SuccessResult("Product nesnesi silindi");
	}

	@Override
	public Result setQuantity(int id, int quantity) {
		Product p = this.productDao.getById(id);
		p.setUnitsInStock(p.getUnitsInStock() - quantity);
		this.productDao.save(p);
		return new SuccessResult("Product nesnesi güncellendi");
	}
	
//	@Override
//	public DataResult<Product> getByProductName(String productName) {
//		return new SuccessDataResult<Product>
//		(productDao.getByProductName(productName), "kayıtlar listelendi");
//	}
//
//	@Override
//	public DataResult<Product> getByProductNameAndCategory_CategoryId(String productName, int categoryId) {
//		return new SuccessDataResult<Product>
//		(productDao.getByProductNameAndCategory_CategoryId(productName, categoryId), "kayıtlar listelendi");
//	}
//
//	@Override
//	public DataResult<List<Product>> getByProductNameOrCategory_CategoryId(String productName, int categoryId) {
//		return new SuccessDataResult<List<Product>>
//		(productDao.getByProductNameOrCategory_CategoryId(productName, categoryId), "kayıtlar listelendi");
//	}
//
//	@Override
//	public DataResult<List<Product>> getByCategory_CategoryIdIn(List<Integer> categories) {
//		return new SuccessDataResult<List<Product>>
//		(productDao.getByCategory_CategoryIdIn(categories), "kayıtlar listelendi");
//	}
//
//	@Override
//	public DataResult<List<Product>> getByProductNameContains(String productName) {
//		return new SuccessDataResult<List<Product>>
//		(productDao.getByProductNameContains(productName), "kayıtlar listelendi");
//	}
//
//	@Override
//	public DataResult<List<Product>> getByProductNameStartsWith(String productName) {
//		return new SuccessDataResult<List<Product>>
//		(productDao.getByProductNameStartsWith(productName), "kayıtlar listelendi");
//	}
//
//	@Override
//	public DataResult<List<Product>> getByNameAndCategory(String productName, int categoryId) {
//		return new SuccessDataResult<List<Product>>
//		(productDao.getByNameAndCategory(productName, categoryId), "kayıtlar listelendi");
//	}

	@Override
	public DataResult<List<Product>> getAll(int pageNo, int pageSize) {
		Pageable pageable = PageRequest.of(pageNo - 1, pageSize);
		return new SuccessDataResult<List<Product>>(productDao.findAll(pageable).getContent());
	}

	@Override
	public DataResult<List<Product>> getAllSorted() {
		Sort sort = Sort.by(Sort.Direction.ASC, "ProductName");
		return new SuccessDataResult<List<Product>>(productDao.findAll(sort));
	}

	@Override
	public DataResult<List<Product>> getByCategoryId(int id) {
		return new SuccessDataResult<List<Product>>(this.productDao.getByCategoryId(id), "Başarılı");
	}

	@Override
	public DataResult<Product> getById(int id) {
		return new SuccessDataResult<Product>(this.productDao.getById(id), "Başarılı");
	}



//	@Override
//	public DataResult<List<ProductWithCategoryDto>> getProductWithCategoryDetails() {
//		return new SuccessDataResult<List<ProductWithCategoryDto>>
//		(this.productDao.getProductWithCategoryDetails(), "kayıtlar listelendi");
//	}
//
//	@Override
//	public DataResult<List<Product>> getByCategory_CategoryId(int categoryId) {
//		return new SuccessDataResult<List<Product>>
//		(this.productDao.getByCategory_CategoryId(categoryId), "kayıtlar listelendi"); 
//	}

}
