import React, { useCallback, useEffect, useState } from 'react';
import { getPrefecturesAPI, PrefectureList } from '../../api/prefectures/prefectures.api';
import {
  PopulationTransitionTemplate,
  PopulationTransitionTemplateProps,
} from '../../components/templates/population-transition/population-transition.template';

export const PopulationTransitionPage: React.FC = () => {
  const [prefectureList, setPrefectureList] = useState<PrefectureList[]>([]);

  const fetchPrefectures = useCallback(async () => {
    const result = await getPrefecturesAPI();
    setPrefectureList((prevList) => {
      if (JSON.stringify(prevList) === JSON.stringify(result.result)) {
        return prevList;
      } else {
        return result.result;
      }
    });
  }, []);

  useEffect(() => {
    fetchPrefectures();
  }, [fetchPrefectures]);

  const onChangeCheckbox = (event: React.ChangeEvent<HTMLInputElement>, label: string) => {
    console.log(event.target.checked);
    console.log(label);
  };

  const props: PopulationTransitionTemplateProps = {
    prefectureList: prefectureList.map((data) => data.prefName),
    onChangeCheckbox,
  };
  return <PopulationTransitionTemplate {...props} />;
};

PopulationTransitionPage.whyDidYouRender = true;
