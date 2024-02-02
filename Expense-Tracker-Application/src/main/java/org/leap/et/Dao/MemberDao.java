package org.leap.et.Dao;

import java.util.Optional;

import org.leap.et.Entity.Member;
import org.leap.et.Repository.MemberRepositiory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class MemberDao {
	
	@Autowired
	private MemberRepositiory repo;
	
	public Member saveMember(Member m) {
		return repo.save(m);
	}
	
	public Member updateMember(Member m) {
		return repo.save(m);
	}
	
	public Optional<Member> findMemberById(int mID) {
		return repo.findById(mID);
	}
	
	public void deleteMember(int mID) {
		repo.deleteById(mID);
	}
	
	public Optional<Member> verifyMember(String email, String password){
		return repo.verifyMember(email, password);
	}
}
