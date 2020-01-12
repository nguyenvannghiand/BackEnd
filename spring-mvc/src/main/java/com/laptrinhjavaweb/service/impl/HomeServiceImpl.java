package com.laptrinhjavaweb.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.laptrinhjavaweb.service.HomeService;

@Service
public class HomeServiceImpl implements HomeService {

	@Override
	public List<String> loadMenu() {
		// TODO Auto-generated method stub
		List<String> menus = new ArrayList<>();
		menus.add("Blog Java");
		menus.add("Hướng đẫn cài đặt java web");
		menus.add("Liên hệ");
		menus.add("Thanh toán");
		return menus;
	}

}
