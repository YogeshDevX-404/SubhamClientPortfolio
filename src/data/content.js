// All site content lives here. Source: KUMAR_SHUBHAM_New.pdf.
export const profile = {
  name: 'Kumar Shubham',
  role: 'Network Engineer | Routing, Switching & Security',
  targetRole: 'Entry-level Network Engineer / NOC Engineer',
  location: 'Gurugram, India',
  availability: 'Immediate joiner',
  email: 'singhshubham6574@gmail.com',
  phone: '+91 8102702613',
  resume: '/Kumar_Shubham_Resume.pdf',
  linkedin: null, // TODO: the PDF has a LinkedIn label but no URL. Add the real URL here to show it.
  summary:
    'B.Tech Electronics & Communication Engineering graduate with hands-on CCNA and CCNP Enterprise training in routing, switching, network configuration and troubleshooting. I configure Cisco routers and switches, VLANs, trunking, STP, DHCP, ACLs and routing protocols in physical and simulated labs.',
  core: ['Routing & Switching', 'LAN/WAN', 'VLAN', 'STP', 'OSPF', 'EIGRP', 'DNS', 'DHCP', 'ACL', 'NAT', 'Network Troubleshooting'],
};

export const stats = [
  { icon: 'layers', value: '3', label: 'Network Projects', note: 'Built and verified in simulated labs' },
  { icon: 'ospf', value: '12-Router', label: 'OSPF Lab', note: 'Multi-area OSPF with Virtual Links and MD5' },
  { icon: 'chart', value: 'CCNA & CCNP', label: 'Enterprise Training', note: 'Hands-on routing, switching and security' },
];

export const aboutText = [
  'I am a B.Tech Electronics & Communication Engineering graduate with hands-on CCNA and CCNP Enterprise training in routing, switching and network configuration. I configure Cisco routers and switches, VLANs, trunking, STP, DHCP, ACLs and routing protocols across physical and simulated environments, and troubleshoot LAN connectivity with Cisco IOS, ping and traceroute.',
  'I am pursuing CCIE Security training and looking for an entry-level Network Engineer or NOC Engineer role.',
];

export const aboutCards = [
  { icon: 'ospf', title: 'Routing & Switching', text: 'OSPF, EIGRP, BGP basics, VLANs, STP and EtherChannel across multi-router labs.' },
  { icon: 'shield', title: 'Network Security', text: 'Cisco ASA firewalls, site-to-site IPsec VPNs, DMVPN, ACLs and NAT policy.' },
  { icon: 'tool', title: 'Troubleshooting', text: 'Fault isolation with Cisco IOS CLI, ping and traceroute.' },
];

export const heroChips = [['ospf', 'OSPF'], ['shield', 'IPsec VPN'], ['router', 'Cisco ASA']];

export const skills = [
  { title: 'Networking Fundamentals', items: ['OSI Model', 'TCP/IP Model', 'TCP/UDP', 'Subnetting', 'ARP', 'ICMP', 'LAN/WAN', 'NAT', 'PAT', 'DNS Basics', 'DHCP'] },
  { title: 'Routing Protocols', items: ['Static Routing', 'OSPF', 'EIGRP', 'BGP Basics'] },
  { title: 'Switching', items: ['VLAN', 'Trunk', 'DTP', 'VTP', 'STP', 'MST', 'EtherChannel'] },
  { title: 'Network Security', items: ['Cisco ASA Firewall', 'ACL', 'IPsec', 'VPN', 'GRE VPN', 'DMVPN', 'NAT-T'] },
  { title: 'Troubleshooting & Tools', items: ['Cisco IOS CLI', 'Ping', 'Traceroute', 'GNS3', 'EVE-NG', 'Cisco Packet Tracer'] },
];

export const training = [
  {
    title: 'CCNA & CCNP Enterprise Training',
    org: 'Network Bulls, Gurugram',
    period: 'Dec 2025 – July 2026',
    status: null,
    points: [
      'Completed intensive training in networking fundamentals including IP addressing, routing, switching, VLANs, subnetting and network security.',
      'Built and tested LAN environments using VLANs, trunking, STP, EtherChannel, DHCP and ACLs.',
      'Configured and troubleshot Cisco routers and switches in physical and simulated network labs.',
      'Developed practical knowledge of TCP/IP, OSPF, EIGRP, WAN technologies and network troubleshooting methodologies.',
    ],
  },
  { title: 'CCIE Security Training', org: null, period: 'July 2026', status: 'Pursuing', points: [] },
];

export const projectCategories = ['All', 'Security', 'Routing'];

export const projects = [
  {
    id: 'P-01',
    title: 'Site-to-Site IPsec VPN on Cisco ASA',
    category: 'Security',
    summary: 'Secure LAN-to-LAN communication between two remote sites, with Internet access kept working through NAT/PAT.',
    points: [
      'Configured a site-to-site IPsec VPN on Cisco ASA between two remote sites.',
      'Used policy NAT to bypass NAT for VPN traffic while applying NAT/PAT to Internet-bound traffic.',
      'Configured ACLs, IKE, IPsec policies, routing and NAT rules for end-to-end connectivity.',
      'Tested and troubleshot the tunnel, LAN-to-LAN traffic, Internet access and NAT translations with ping, traceroute and ASA commands.',
    ],
    tags: ['Cisco ASA', 'IPsec', 'IKE', 'Policy NAT', 'PAT', 'ACL'],
  },
  {
    id: 'P-02',
    title: 'IPsec VPN with Overlapping Subnets',
    category: 'Security',
    summary: 'Two sites that both use 192.168.1.0/24 communicate securely by translating the subnets with NAT.',
    points: [
      'Configured a site-to-site IPsec VPN between two Cisco ASA firewalls where both LANs use 192.168.1.0/24.',
      'Implemented NAT-based subnet translation so the two identically addressed LANs can communicate.',
      'Verified LAN-to-LAN connectivity with ping, traceroute, NAT translations and ASA VPN verification commands.',
    ],
    tags: ['Cisco ASA', 'IPsec', 'NAT', 'Overlapping Subnets'],
  },
  {
    id: 'P-03',
    title: 'Multi-Area OSPF with Virtual Links and MD5',
    category: 'Routing',
    summary: 'A 12-router OSPF design across Areas 0, 51, 66 and 76, secured with MD5 authentication.',
    points: [
      'Configured OSPF across 12 routers in Areas 0, 51, 66 and 76 using structured IP addressing, loopbacks and manual router IDs.',
      'Implemented OSPF MD5 authentication and virtual links to connect the backbone area to standard areas, then verified neighbor adjacencies and routing.',
      'Troubleshot OSPF authentication, neighbor and reachability issues using Cisco IOS commands.',
    ],
    tags: ['OSPF', 'Virtual Links', 'MD5 Authentication', 'Router ID', 'Cisco IOS'],
  },
];

export const education = [
  { title: 'B.Tech in Electronics and Communication Engineering', org: 'C.V. Raman Global University', period: 'Nov 2022 – Jun 2025', result: 'CGPA: 7.58/10' },
  { title: 'Diploma in Electrical and Electronics Engineering', org: 'Government Polytechnic College, Sahibganj (JUT)', period: 'Mar 2019 – Jun 2022', result: 'Score: 80.48%' },
];
