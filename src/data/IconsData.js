import React from 'react';
import { GrHostMaintenance } from 'react-icons/gr';
import { FaGripfire } from  'react-icons/fa';
import { GiFireplace } from 'react-icons/gi';

 const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const iconsData = [{
	icon: iconStyle(GiFireplace),
},
{
	icon: iconStyle(FaGripfire),
},{
	icon: iconStyle(GrHostMaintenance),
}, ]


