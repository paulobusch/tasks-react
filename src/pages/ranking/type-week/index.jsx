import RankingBase from '../ranking-base';

export default class RankingTypeForDayWeek extends RankingBase {
  constructor(props) {
    super(props, 'chart-top-five-type-for-day-week', 'Top 5 Atividades dos últimos 7 dias');
  }
}
