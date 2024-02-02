package org.leap.et.Repository;

import java.util.Optional;

import org.leap.et.Entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface MemberRepositiory extends JpaRepository<Member, Integer> {

	@Query("select m from Member m where m.email=?1 and m.password=?2")
	Optional<Member> verifyMember(String email, String password);
	
	
}
