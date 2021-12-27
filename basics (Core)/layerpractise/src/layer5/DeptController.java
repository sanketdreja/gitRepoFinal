package layer5;

import layer2.Department;
import layer4.DepartmentServiceimp;

public class DeptController {

	public static void main(String[] args) {
		DepartmentServiceimp deptService =new DepartmentServiceimp();
		
		Department deptObj =new Department();
		
		deptObj.setDepartmentNumber(55);
		deptObj.setDepartmentName("Food ");
		deptObj.setDepartmentLocation("Hotel");
		deptService.createDepartmentService( deptObj);
		//deptService.updateDepartmentService( deptObj);
		//deptService.deleteDepartmentService( 55);
	
		
	
	
	
	
	}
}
