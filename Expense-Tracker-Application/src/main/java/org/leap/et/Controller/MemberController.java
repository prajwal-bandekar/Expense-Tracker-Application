package org.leap.et.Controller;

import org.leap.et.Entity.Member;
import org.leap.et.Entity.ResponseStructure;
import org.leap.et.Service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MemberController {
	@Autowired
	private MemberService service;

	@PostMapping("/member")
	public ResponseEntity<ResponseStructure<Member>> saveMember(@RequestBody Member m){
		return service.saveMember(m);
	}
	
	@PutMapping("/member")
	public ResponseEntity<ResponseStructure<Member>> updateMember(@RequestBody Member m){
		return service.updateMember(m);
	}
	
	@GetMapping("/member/{mID}")
	public ResponseEntity<ResponseStructure<Member>> findByID(@PathVariable int mID){
		return service.findMemberById(mID);
	}

	@DeleteMapping("/member/{mID}")
	public ResponseEntity<ResponseStructure<String>> deleteMember(@PathVariable int mID){
		return service.deleteMember(mID);
	}
	
	@PostMapping("/member/login-via-email")
	public ResponseEntity<ResponseStructure<Member>> verifyByEmail(@RequestParam String email, @RequestParam String password){
		return service.verifyMember(email, password);
	}
	
}