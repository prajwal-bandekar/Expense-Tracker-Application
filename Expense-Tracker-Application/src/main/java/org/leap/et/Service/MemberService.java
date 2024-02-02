package org.leap.et.Service;

import java.util.Optional;

import org.leap.et.Dao.MemberDao;
import org.leap.et.Entity.Member;
import org.leap.et.Entity.ResponseStructure;
import org.leap.et.Exceptions.IdNotFoundException;
import org.leap.et.Exceptions.InvalidCredentialsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class MemberService {

	@Autowired
	private MemberDao mDao;
	
	public ResponseEntity<ResponseStructure<Member>> saveMember(Member m){
		ResponseStructure<Member> structure = new ResponseStructure<>();
		structure.setData(mDao.saveMember(m));
		structure.setMessage("Member Created Sucesfully");
		structure.setStatusCode(HttpStatus.CREATED.value());
		return new ResponseEntity<ResponseStructure<Member>>(structure, HttpStatus.CREATED);
	}
	
	public ResponseEntity<ResponseStructure<Member>> updateMember(Member m){
		ResponseStructure<Member> structure = new ResponseStructure<>();
		structure.setData(mDao.updateMember(m));
		structure.setMessage("Member Details Updated Sucesfully");
		structure.setStatusCode(HttpStatus.ACCEPTED.value());
		return new ResponseEntity<ResponseStructure<Member>>(structure, HttpStatus.ACCEPTED);
	}
	
	public ResponseEntity<ResponseStructure<Member>> findMemberById(int mID) {
		ResponseStructure<Member> structure = new ResponseStructure<>();
		Optional<Member> recMember = mDao.findMemberById(mID);
		if(recMember.isPresent()) {
			structure.setData(recMember.get());
			structure.setMessage("Member Found");
			structure.setStatusCode(HttpStatus.OK.value());
			return new ResponseEntity<ResponseStructure<Member>>(structure, HttpStatus.OK);
		}
		
		throw new IdNotFoundException();
	}
	
	public ResponseEntity<ResponseStructure<String>> deleteMember(int mID) {
		ResponseStructure<String> structure = new ResponseStructure<>();
		Optional<Member> recMember = mDao.findMemberById(mID);
		
		if(recMember.isPresent()) {
			mDao.deleteMember(mID);
			structure.setData("Task Executed");
			structure.setMessage("Member Found");
			structure.setStatusCode(HttpStatus.OK.value());
			return new ResponseEntity<ResponseStructure<String>>(structure, HttpStatus.OK);
		}
		
		throw new IdNotFoundException();
	}
	
	public ResponseEntity<ResponseStructure<Member>> verifyMember(String email, String password){
		ResponseStructure<Member> structure = new ResponseStructure<>();
		Optional<Member> recMemeber = mDao.verifyMember(email, password);
		if(recMemeber.isPresent()) {
			structure.setData(recMemeber.get());
			structure.setMessage("Member verified successfully with Email and Password");
			structure.setStatusCode(HttpStatus.OK.value());
			return new ResponseEntity<ResponseStructure<Member>>(structure, HttpStatus.OK);
		}
		
//		Add Exceptions here 
		throw new InvalidCredentialsException();
	}
	
	
}
