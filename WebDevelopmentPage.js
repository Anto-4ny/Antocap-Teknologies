import React from 'react';
import WebsiteCategory from './WebsiteCategory';

const WebDevelopmentPage = () => {
  // Define services for each category
  const ecommerceServices = [
    {
      title: 'Basic Ecommerce Website',
      icon: 'fa-shopping-cart text-blue-600',
      description: 'A simple online store for your products.',
      price: '$1,000',
      kshPrice: '110,000',
      features: ['Responsive Design', 'Basic Product Display', 'Shopping Cart', 'Payment Gateway Integration']
    },
    {
      title: 'Advanced Ecommerce Website',
      icon: 'fa-shopping-cart text-green-600',
      description: 'A more advanced online store with added features.',
      price: '$2,500',
      kshPrice: '275,000',
      features: ['SEO Optimized', 'Custom Design', 'Unlimited Products', 'Order Management', 'Advanced Payment Integration']
    },
    {
      title: 'Premium Ecommerce Website',
      icon: 'fa-shopping-cart text-orange-600',
      description: 'An enterprise-level ecommerce platform with full customization.',
      price: '$5,000',
      kshPrice: '550,000',
      features: ['Custom Features', 'Custom Checkout Process', 'Multi-currency Support', 'Advanced Reporting', 'Multiple Payment Gateways']
    }
  ];

  const customWebsiteServices = [
    {
      title: 'Basic Custom Website',
      icon: 'fa-cogs text-blue-600',
      description: 'Tailored to your specific business needs.',
      price: '$1,500',
      kshPrice: '165,000',
      features: ['Custom Design', 'SEO Optimized', 'Responsive Design', 'Up to 5 Pages']
    },
    {
      title: 'Advanced Custom Website',
      icon: 'fa-cogs text-green-600',
      description: 'Advanced features and design for businesses.',
      price: '$3,000',
      kshPrice: '330,000',
      features: ['Custom Features', 'Content Management System', 'Mobile Optimization', 'Up to 15 Pages']
    }
  ];

  const otherWebsiteServices = [
    {
      title: 'Portfolio Website',
      icon: 'fa-briefcase text-purple-600',
      description: 'Showcase your work and skills in a professional portfolio.',
      price: '$100',
      kshPrice: '13,000',
      features: ['Responsive Design', 'Project Showcase', 'SEO Optimized']
    },
    {
      title: 'Landing Page Website',
      icon: 'fa-map-signs text-red-600',
      description: 'A single-page website for product launches or services.',
      price: '$120',
      kshPrice: '16,000',
      features: ['One-Page Design', 'SEO Optimized', 'Lead Generation']
    }
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-12">Our Web Development Services</h1>
      
      {/* Ecommerce Website Category */}
      <WebsiteCategory category="Ecommerce Websites" services={ecommerceServices} />
      
      {/* Custom Websites Category */}
      <WebsiteCategory category="Custom Websites" services={customWebsiteServices} />
      
      {/* Other Types of Websites Category */}
      <WebsiteCategory category="Other Types of Websites" services={otherWebsiteServices} />
    </div>
  );
};

export default WebDevelopmentPage;
