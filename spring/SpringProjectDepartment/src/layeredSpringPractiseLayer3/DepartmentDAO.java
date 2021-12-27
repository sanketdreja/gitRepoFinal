package layeredSpringPractiseLayer3;

import java.util.List;

import layeredSpringPractise.Department;



public interface DepartmentDAO {
	 
		void insertDepartment(Department dobj);
		Department selectDepartment(int dno);
		List <Department> selectDepartment();
		void updateDepartment(Department dobj);
		void deleteDepartment(int dno);
		
}
