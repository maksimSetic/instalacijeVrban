import React from 'react';
import  { BiBath } from 'react-icons/bi'
import { FaGripfire } from  'react-icons/fa'
import { GiBrainFreeze, GiFireplace } from 'react-icons/gi'
import { MdAttachMoney }  from 'react-icons/md'
import {  SiCirrusci } from 'react-icons/si'
import {  GiPipes } from 'react-icons/gi'
import {  CgSmartHomeBoiler } from 'react-icons/cg'


const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [

	{
		name: 'Klimatizacija/Ventilacija',
		description: 'Naš tim je uvijek dostupan zatreba li vam nešto u neprilično vrijeme',
		icon: iconStyle(GiBrainFreeze),
		imgClass: 'four',
	},
	{
		name: 'Kotlovi/Peći/Kamini',
		description: 'Nudimo najvišu razinu sigurnosti i povjerenja u kupoprodaji',
		icon: iconStyle(GiFireplace),
		imgClass: 'one',
	},
	{
		name: 'Bojleri/Spremnici',
		description: 'Naši proizvodi su laki za korištenje i integriranje',
		icon: iconStyle(FaGripfire),
		imgClass: 'two',
	},
	
	{
		name: 'Vaillant Plinski Bojleri',
		description: 'Nudimo najveći omjer cijene/usluge što nam tržište omogućuje',
		icon: iconStyle(CgSmartHomeBoiler),
		imgClass: 'five',
	},
	{
		name: 'Radijatori',
		description: 'Ukoliko vas muči tehnički ili dizajn problem smo uvijek spremni ponuditi pomoć',
		icon: iconStyle(SiCirrusci),
		imgClass: 'three',
	},
	{
		name: 'Podno grijanje',
		description:
			'Proizvodi su nam svjetski standardizirani što znači da dobivate vrhunsku kvalitetu',
		icon: iconStyle(GiPipes),
		imgClass: 'six',
	},
];
