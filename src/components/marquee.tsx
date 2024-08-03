import React, { useEffect, useState } from 'react';
import UIkit from 'uikit';

interface Image {
  src: string;
  link: string;
  tooltip: string;
}

const images: Image[] = [
  { src: 'logos/community/minecraftid.png', link: 'https://minecraft-id.net/', tooltip: 'MinecraftID' },
  { src: 'logos/community/mcsejati.png', link: 'https://mcsejati.site/', tooltip: 'Minecraft Sejati' },
  { src: 'logos/community/mci.png', link: 'https://discord.gg/minecraft-community-indonesia-728905506206384128', tooltip: 'Minecraft Community Indonesia' },
  { src: 'logos/community/sahabatmc.png', link: 'https://sahabatmcid.my.id/', tooltip: 'Sahabat Minecrafter' },
  { src: 'logos/community/chronoscraft.png', link: 'https://discord.com/invite/yRYrkwRm7d', tooltip: 'Chronoscraft Community' },
  { src: 'logos/community/motionimemc.png', link: 'http://discord.gg/motionime', tooltip: 'MotionIme Minecraft' },
  { src: 'logos/community/zanmcteam.png', link: 'https://discord.gg/XVKDBsSFFS', tooltip: 'ZanMcTeam' },
  { src: 'logos/community/bdfm.png', link: 'https://bfdmcommunity.netlify.app/', tooltip: 'Bhycero Group' },
  { src: 'logos/community/haven.png', link: 'https://discord.gg/hav3n', tooltip: 'Haven' },
  { src: 'logos/community/mchubid.png', link: 'https://mchub.id/', tooltip: 'MCHub Indonesia' },
];


const Marquee: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    UIkit.tooltip('.uk-tooltip'); // Initialize tooltips
  }, []);


  return (
    <div 
      className="relative overflow-hidden flex-nowrap w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="marquee flex"
        style={{ animationPlayState: isHovered ? 'paused' : 'running' }}
      >
        {images.concat(images).map((image, index) => (
          <a key={index} href={image.link} className="shrink-0 w-auto" uk-tooltip={`title: ${image.tooltip}; pos: bottom`}>
            <img src={image.src} alt={`Image ${index + 1}`} className="h-28 mx-12" />
          </a>
        ))}

      </div>

    </div>
  );
};

export default Marquee;
