import RankingBase from '../ranking-base';

export default class RankingProjectForYear extends RankingBase {
  constructor(props) {
    super(props, 'chart-top-five-project-for-year', 'Top 5 Projetos dos últimos 12 meses');
  }
}
