export interface GameCategory {
  id: string;
  title: string;
  subTitle: string;
  icon: string;
  category: string;
  score: number;
  description: string;
  accentColor: string;
  borderColor: string;
}

export interface PlayerStat {
  label: string;
  value: string | number;
  icon: string;
  color: string;
}

export interface TrophyBadge {
  id: string;
  title: string;
  icon: string;
  unlocked: boolean;
  statusText: string;
}
