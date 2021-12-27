package layer3;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import javax.naming.spi.DirStateFactory.Result;

import layer2.Department;

public class DeparmentDAOimp implements DepartmentDAO {

	Connection conn;

	public DeparmentDAOimp() {
		try {
			System.out.println("DepartmentDAOimp :loading Drivers ...Getting the connection..");
			// Register the user
			DriverManager.registerDriver(new org.hsqldb.jdbc.JDBCDriver());
			System.out.println("Drivers Registered..");
			/// Establishing a connection
			conn = DriverManager.getConnection("jdbc:hsqldb:hsql://localhost/mydb", "SA", "");
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	@Override
	public void insertDepartment(Department dobj) {
		System.out.println("Insert");

		System.out.println("DepartmentDAOimp : insertDepartment(Department)-inserting department");
		try {
			PreparedStatement pst = conn.prepareStatement("insert into dept (?,?,?)");
			pst.setInt(1, dobj.getDepartmentNumber());
			pst.setString(2, dobj.getDepartmentName());
			pst.setString(3, dobj.getDepartmentLocation());
			int rows = pst.executeUpdate();
			System.out.println("Row Created :" + rows);
			pst.close();
			conn.close();

		} catch (SQLException e) {
			e.printStackTrace();
		}
	}

	@Override
	public Department selectDepartment(int dno) {
		System.out.println("Deaprtment DAO imp:Selecting from departno.");
		// TODO Auto-generated method stub
		return null;
	}

	public List<Department> selectDepartments(){
	    	List<Department> deptList =new ArrayList<Department>();
	    	try {
	    		System.out.println("Department DAO: Selecting Departmnet");
	    		Statement st =conn.createStatement();
	    		ResultSet rs = st.executeQuery("Select * from dept");
	    		while (rs.next()) {
	    			Department dept = new Department();
	    			dept.setDepartmentNumber(rs.getInt(1));
	    			dept.setDepartmentName(rs.getString(2));
	    			dept.setDepartmentLocation(rs.getString(3));
	    			deptList.add(dept);
	    		}}
	    		catch (SQLException e) {
	    			e.printStackTrace();
	    		}
			return deptList;
	    		
	    		
	    	
	    	
	    }

	public void updateDepartment(Department dobj) {
		try {
			PreparedStatement pst = conn.prepareStatement("Update dept set ,dname=?,dloc=? where dno=?");

			pst.setString(1, dobj.getDepartmentName());
			pst.setString(2, dobj.getDepartmentLocation());
			pst.setInt(3, dobj.getDepartmentNumber());
			int rows = pst.executeUpdate();
			System.out.println("Row Updated:" + rows);
			pst.close();
			conn.close();

		} catch (SQLException e) {
			e.printStackTrace();
		}

	}

	@Override
	public void deleteDepartment(int dno) {
		try {

			PreparedStatement pst = conn.prepareStatement("Delete from dept where  dno=?");
			pst.setInt(1, dno);
			int rows = pst.executeUpdate();
			System.out.println("Row Delete :" + rows);
			pst.close();
			conn.close();

		} catch (SQLException e) {
			e.printStackTrace();
		}

	}

	@Override
	public List<Department> selectDepartment() {
		// TODO Auto-generated method stub
		return null;
	}
}
