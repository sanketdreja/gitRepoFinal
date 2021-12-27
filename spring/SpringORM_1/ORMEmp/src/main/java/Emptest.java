import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;

import com.java.orm.Department;

public class Emptest {

	public static void main(String[] args) {
		EntityManagerFactory entityManagerFactory = Persistence.createEntityManagerFactory("MyEmp");
		System.out.println("entity manager factory : "+entityManagerFactory);
		
		EntityManager entityManager = entityManagerFactory.createEntityManager();
		System.out.println("entity manager : "+entityManager);
		
		EntityTransaction transaction = entityManager.getTransaction();
		System.out.println("transaction : "+transaction);
		
		transaction.begin();
		System.out.println("Transaction started....");
		
		Emp emp =null;
		System.out.println(" null POJO created");
		emp =entityManager.find(
				)
				
				
				
//				Department dept = null;
//				System.out.println("null POJO created...");
//	
//				dept = entityManager.find(Department.class,369);
//				System.out.println("DEPTNO : "+dept.getDepartmenNumber());
//				System.out.println("DNAME  : "+dept.getDepartmentName());
//				System.out.println("DLOC   : "+dept.getDepartmenNumber());
//				
//				System.out.println("GOT THE POJO FROM DB..");
//				System.out.println("RETRIEVED...");
				
				
				
				
				
				
		transaction.commit();
		System.out.println("Committed...");
		
	}
}
