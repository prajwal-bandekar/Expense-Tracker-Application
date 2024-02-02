package org.leap.et.Entity;

import java.util.List;

@lombok.Data
public class ResponseStructure<T> {
	private T Data;
	private String Message;
	private int statusCode;
	
}
