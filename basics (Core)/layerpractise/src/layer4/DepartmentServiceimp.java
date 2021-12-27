package layer4;

import layer2.Department;
import layer3.DeparmentDAOimp;

public class DepartmentServiceimp implements DepartmentService {

	DeparmentDAOimp deptDao =new DeparmentDAOimp();
	
	public void createDepartmentService (Department dobj) {
		deptDao.insertDepartment(dobj);
	   System.out.println("DepartmentServiceImpl : CreateDepartment");
	}

	public void updateDepartmentService(Department deptObj) {
		deptDao.updateDepartment(deptObj);
		   System.out.println("DepartmentServiceImpl : UpdateDepartment");
	}

	public void deleteDepartmentService(int dno) {
		deptDao.deleteDepartment(dno);
		   System.out.println("DepartmentServiceImpl : DeleteDepartment");
	}

}
