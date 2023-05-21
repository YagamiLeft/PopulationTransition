import React, { useCallback, useEffect, useState } from 'react';
import { getPopulationCompositionAPI } from '../../api/population-composition/population-composition.api';
import { getPrefecturesAPI, PrefectureList } from '../../api/prefectures/prefectures.api';
import {
  PopulationCompositionList,
  PopulationTransitionTemplate,
  PopulationTransitionTemplateProps,
} from '../../components/templates/population-transition/population-transition.template';

export const PopulationTransitionPage: React.FC = () => {
  const [prefectureList, setPrefectureList] = useState<PrefectureList[]>([]);
  const [populationCompositionList, setPopulationCompositionList] = useState<PopulationCompositionList[]>([]);

  const fetchPrefectures = useCallback(async () => {
    getPrefecturesAPI().then((result) => {
      setPrefectureList((prevList) => {
        if (JSON.stringify(prevList) === JSON.stringify(result.result)) {
          return prevList;
        } else {
          return result.result;
        }
      });
    });
  }, []);

  useEffect(() => {
    fetchPrefectures();
  }, [fetchPrefectures]);

  const onChangeCheckbox = async (event: React.ChangeEvent<HTMLInputElement>, label: string) => {
    const isChecked = event.target.checked;
    const [specifyPrefecture] = prefectureList.filter((pref) => pref.prefName === label);
    if (isChecked) {
      getPopulationCompositionAPI(specifyPrefecture.prefCode).then((result) => {
        setPopulationCompositionList([
          ...populationCompositionList,
          {
            prefName: label,
            data: result.result.data,
          },
        ]);
      });
    } else {
      setPopulationCompositionList(
        [...populationCompositionList].filter((cpmposition) => cpmposition.prefName !== label),
      );
    }
  };

  const props: PopulationTransitionTemplateProps = {
    prefectureList: prefectureList.map((data) => data.prefName),
    populationCompositionList,
    onChangeCheckbox,
  };
  return <PopulationTransitionTemplate {...props} />;
};

PopulationTransitionPage.whyDidYouRender = true;
