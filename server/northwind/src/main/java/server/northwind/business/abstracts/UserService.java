package kodlamaio.northwind.business.abstracts;

import kodlamaio.northwind.core.entities.User;
import kodlamaio.northwind.core.utilities.results.DataResult;
import kodlamaio.northwind.core.utilities.results.Result;


public interface UserService {
	DataResult<User> getByEmail(String email);
	Result add(User user);
	DataResult<User> getByEmailAndPassword(String email, String password);
}
