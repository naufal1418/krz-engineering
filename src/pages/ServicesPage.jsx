import React from 'react';
import ServicesOverviewSection from '@/components/sections/ServicesOverviewSection';
import ServiceDetail3DPrinting from '@/components/sections/ServiceDetail3DPrinting';
import ServiceDetailCAD from '@/components/sections/ServiceDetailCAD';
import ServiceDetailCNC from '@/components/sections/ServiceDetailCNC';
import ServiceDetailLaser from '@/components/sections/ServiceDetailLaser';


const ServicesPage = () => {
  return (
    <div className="pt-20">
      <ServicesOverviewSection />
      <ServiceDetail3DPrinting />
      <ServiceDetailCAD />
      <ServiceDetailCNC />
      <ServiceDetailLaser />
    </div>
  );
};

export default ServicesPage;