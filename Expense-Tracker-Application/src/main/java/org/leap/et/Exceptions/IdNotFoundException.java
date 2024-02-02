package org.leap.et.Exceptions;

public class IdNotFoundException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Override
	public String getMessage() {
		return "Invalid Id";
	}

}