(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{368:function(t,v,e){"use strict";e.r(v);var _=e(45),r=Object(_.a)({},(function(){var t=this,v=t.$createElement,e=t._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_2021"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2021"}},[t._v("#")]),t._v(" 2021")]),t._v(" "),e("h2",{attrs:{id:"may"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#may"}},[t._v("#")]),t._v(" May")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("day")]),t._v(" "),e("th",[t._v("log")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",[t._v("블로그를 생성했다")])]),t._v(" "),e("tr",[e("td",[t._v("2")]),t._v(" "),e("td",[t._v("사소하지만 블로그 액센트 컬러를 정했다. 어디에서부터 정리를 할지는 고민하는 중.")])]),t._v(" "),e("tr",[e("td",[t._v("3")]),t._v(" "),e("td",[t._v("MySQL "),e("code",[t._v("SELECT ... FOR UPDATE")]),t._v("가 실행될 때 걸리는 row-level lock은 Exclusive lock(X lock)으로, 해당 lock이 걸려 있으면 다른 트랜잭션에서는 해당 row에 대해 "),e("code",[t._v("SELECT")]),t._v(", "),e("code",[t._v("UPDATE")]),t._v(", "),e("code",[t._v("DELETE")]),t._v("가 불가능하다. "),e("code",[t._v("UPDATE")]),t._v(", "),e("code",[t._v("DELETE")]),t._v(" 쿼리 실행시에도 X lock이 걸린다.")])]),t._v(" "),e("tr",[e("td",[t._v("4")]),t._v(" "),e("td",[t._v("Caffeine cache는 cache stats 정보를 제공한다. stats를 수집하려면 "),e("code",[t._v("recordStats()")]),t._v("를 포함하여 "),e("code",[t._v("CaffeineCache")]),t._v("를 생성하고, 해당 캐시에서 "),e("code",[t._v("cache.getNativeCache().stats()")]),t._v("로 hitRate, missRate, hitCount, missCount 등의 데이터를 가진 "),e("code",[t._v("CacheStats")]),t._v("를 얻을 수 있다.")])]),t._v(" "),e("tr",[e("td",[t._v("5")]),t._v(" "),e("td",[t._v("데이터베이스 파티셔닝은 논리적인 데이터 엘리먼트를 다수의 엔티티로 쪼개는 행위를 말한다. 파티셔닝은 수평, 수직으로 할 수 있는데 수평으로 하는 파티셔닝을 샤딩이라고 한다. "),e("br"),t._v("샤딩을 하면 지정된 샤드키를 기준으로 데이터를 나누어 저장할 수 있다. 예를 들어 seq를 샤드키로 잡았다면 seq가 1~100, 101~200과 같은 방식으로 각각의 샤드에 어떤 데이터가 저장될 지 분리할 수 있다. 샤딩은 스키마 복제 후 샤드키를 기준으로 데이터를 나누는 것이다.")])]),t._v(" "),e("tr",[e("td",[t._v("6")]),t._v(" "),e("td",[t._v("수직 파티셔닝은 스키마를 나누어 특정 데이터만 다른 테이블로 분리하는 것이다. 공간이나 퍼포먼스, 데이터의 유연성, 보안 이슈 등을 이유로 해당 데이터를 다른 테이블로 분리하고, 원본 데이터에서는 분리된 테이블을 참조하도록 할 수 있다. 정규화와 다른 점은 수직 파티셔닝은 이미 정규화된 data를 분리한다는 점이다.")])]),t._v(" "),e("tr",[e("td",[t._v("7")]),t._v(" "),e("td",[t._v("Junit4 "),e("code",[t._v("@RunWith(MockitoJUnitRunner.class)")]),t._v(", JUnit5 "),e("code",[t._v("@ExtendWith(MockitoExtension.class)")]),t._v(" + 필요한 mock bean "),e("code",[t._v("@Mock")]),t._v(" + mock bean을 inject해서 테스트할 빈 "),e("code",[t._v("@InjectMocks")])])]),t._v(" "),e("tr",[e("td",[t._v("8")]),t._v(" "),e("td",[t._v("MySQL의 기본 isolation은 repeatable read이고, Oracle은 read committed이다.")])]),t._v(" "),e("tr",[e("td",[t._v("9")]),t._v(" "),e("td",[t._v("동기/비동기는 작업 완료 여부를 누가 신경쓰느냐, blocking/non-blocking은 호출되는 함수가 바로 return 하느냐, 마느냐에 관심을 가지고 있는 것이다. "),e("br"),t._v("호출된 함수가 호출 즉시 return하여 호출한 함수에게 제어권을 넘겨 주고 호출한 함수가 다른 일을 할 수 있도록 한다면 non-blocking, 호출된 함수가 작업을 모두 마친 뒤에 제어권을 넘겨줘서 작업을 모두 마칠 때까지 대기하게 하는 것은 blocking이다. "),e("br"),t._v("호출되는 함수에게 callback을 전달해서 호출되는 함수의 작업이 완료되면 전달받은 callback을 실행하고, 호출한 함수는 작업 완료 여부를 신경쓰지 않는다면 비동기, 호출하는 함수가 호출되는 함수의 작업 완료 및 return을 기다리거나 호출되는 함수에게 바로 return을 받더라도 작업 완료 여부에 신경을 쓴다면 동기 방식이다. "),e("a",{attrs:{href:"https://velog.io/@wonhee010/%EB%8F%99%EA%B8%B0vs%EB%B9%84%EB%8F%99%EA%B8%B0-feat.-blocking-vs-non-blocking",target:"_blank",rel:"noopener noreferrer"}},[t._v("참고링크"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[t._v("10")]),t._v(" "),e("td",[t._v("여러 서버에서 캐싱되는 데이터의 실시간 일관성을 유지해야 한다면 분산 캐시 아키텍처를 통해 서버들이 동일한 캐시 데이터를 바라보도록 하면 된다. "),e("br"),t._v("분산 캐시 아키텍처의 종류로는 먼저 Hub and Spoke, 즉 중앙에 캐시 Hub가 있는 서버를 두고 캐시 변경시 Hub에 통지, Hub에서 나머지 서버에 변경내용을 전달하는 방식이 있다. 이 경우 hub를 통하기 때문에 캐시 노드의 클러스터링은 hub를 기준으로 이루어진다. "),e("br"),t._v("두번째는 Replication, Invalidation으로 캐시 변경시 직접 모든 노드에 변경을 알리는 형태이다. 각 캐시 인스턴스간에 직접 연결되어 클러스터를 이룬다. 다만 직접 모든 노드에 변경을 전파하기 때문에 노드의 수가 증가할수록 각 캐시 노드들의 부하가 증가한다.")])]),t._v(" "),e("tr",[e("td",[t._v("11")]),t._v(" "),e("td",[e("a",{attrs:{href:"https://docs.oracle.com/javase/specs/jls/se8/html/jls-8.html#jls-8.9.2",target:"_blank",rel:"noopener noreferrer"}},[t._v("java8"),e("OutboundLink")],1),t._v(" - In an enum declaration, a constructor declaration with no access modifiers is private."),e("br"),e("a",{attrs:{href:"https://docs.oracle.com/javase/specs/jls/se7/html/jls-8.html#jls-8.9.2",target:"_blank",rel:"noopener noreferrer"}},[t._v("java7"),e("OutboundLink")],1),t._v(" - If an enum type has no constructor declarations, then a private constructor that takes no parameters (to match the implicit empty argument list) is automatically provided."),e("br"),t._v("정확히 언제부터 이렇게 되었는지 궁금한데 검색이 잘 안돼서 "),e("a",{attrs:{href:"https://stackoverflow.com/questions/67487069/from-when-java-enum-constructors-default-access-modifier-be-private",target:"_blank",rel:"noopener noreferrer"}},[t._v("stackoverflow에 질문함"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[t._v("12")]),t._v(" "),e("td",[t._v("어제 궁금했던 걸 누군가 댓글을 달아줬는데 자바 6도 기본이 private라고 한다. 컴파일까지 직접 해서 코멘트를 남겨줬다ㅠ 착한 사람... enum은 원래부터 디폴트가 private인가보다.")])]),t._v(" "),e("tr",[e("td",[t._v("13")]),t._v(" "),e("td",[t._v("Caffeine cache는 Window TinyLfu eviction policy를 사용하고 있다. Window TinyLfu는 LRU로 샘플링한 뒤 LFU 방식으로 교체할 캐시를 선택하는 방식이다. "),e("a",{attrs:{href:"https://www.ehcache.org/documentation/2.8/apis/cache-eviction-algorithms.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("EhCache"),e("OutboundLink")],1),t._v(" 는 variation of LRU policy를 사용하고 있는데, 이 경우도 LRU로 sampling한 뒤, 그 중에서 LRU 방식으로 교체할 캐시를 찾는 방식이다. "),e("a",{attrs:{href:"https://github.com/ben-manes/caffeine/wiki/Ehcache",target:"_blank",rel:"noopener noreferrer"}},[t._v("Caffeine cache 공식문서"),e("OutboundLink")],1),t._v(" 에서는 ehcache에 비해 hit rate, time 측면에서 성능이 좋다고 함. 512개 샘플링으로 시작해서 65,536까지 늘렸을 때도 여전히 hit rate, time 측면에서 성능이 좋다고 함.")])]),t._v(" "),e("tr",[e("td",[t._v("14")]),t._v(" "),e("td",[t._v("Java11 버전에서 실험적으로 도입되었던 ZGC라는 GC 방법을 처음 알았다. 버전별 차이도 읽어보고 GC 종류도 찾아보고 했었는데 어떻게 오늘 처음 알았담? 여튼 ZGC는 11버전에 도입되어서 16버전까지도 계속 변경 및 발전하고 있다. ZGC는 메모리 구조는 G1GC와 같이 region으로 분리된 형태이지만 STW를 최대한 짧게 가져가기 위해 mark 단계에서만 STW를 하고, 나머지 단계들은 concurrent하게 진행한다고 한다. "),e("a",{attrs:{href:"https://docs.oracle.com/en/java/javase/16/migrate/significant-changes-jdk-release.html#GUID-327C39ED-C3FD-4637-906A-36C6697E85D5",target:"_blank",rel:"noopener noreferrer"}},[t._v("좋은 링크"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[t._v("15")]),t._v(" "),e("td",[t._v("Spring Boot의 AutoConfiguration은 component scanning, autowiring으로 이루어져 있다. 먼저 빈으로 인식되는 컴포넌트들을 base package부터 탐색해서 컴포넌트로 식별되는 클래스를 찾아 인스턴스를 빈으로 등록하고, 빈간의 의존성을 주입한다."),e("br"),t._v("빈 의존관계를 설정 할 때는 "),e("code",[t._v("@Autowired")]),t._v(" 어노테이션을 사용할 수 있는데, 이 어노테이션은 먼저 type 기준으로 빈을 찾고, 동일한 type의 빈이 여러개라면(ex, 동일 인터페이스를 구현한 클래스가 두개 있다면) 이름으로 찾는다. 이때 변수명을 별도로 설정하고 싶다면 "),e("code",[t._v("@Qualifier")]),t._v(" 어노테이션을 사용하면 된다. 이 단계를 거쳐도 빈이 특정되지 않는다면 "),e("code",[t._v("NoUniqueBeanDefinitionException")]),t._v("이 발생하게 된다.")])]),t._v(" "),e("tr",[e("td",[t._v("16")]),t._v(" "),e("td",[t._v("HTTP Status code 304 Not Modified는 요청된 리소스를 재전송할 필요가 없음, 즉 캐시된 자원으로 리디렉션한다는 응답 코드이다.")])]),t._v(" "),e("tr",[e("td",[t._v("17")]),t._v(" "),e("td",[t._v("HTTP 메시지의 구조는 공통적으로 첫줄에 실행되어야 할 요청 및 결과, 헤더영역에 요청이나 메시지 본문에 대한 설명, 요청 메타데이터 종료를 알리는 빈 줄, 요청 내용이나 응답 내용으로 구성되어 있다. Request의 첫줄은 HTTP Method, 요청 타겟(주로 URI), HTTP 버전(HTTP 버전에 따라 메시지 구조가 달라지기 때문)이 들어가 있고 Response의 첫줄에는 HTTP 버전, 상태코드, 상태메시지가 들어가 있다. 헤더영역에는 공통적으로 content-type, content-length, connection 상태 등이 들어가고, transfer-encoding=chunk로 chunk 단위로 데이터를 전송한다는 것을 알릴 수도 있다.")])]),t._v(" "),e("tr",[e("td",[t._v("18")]),t._v(" "),e("td",[t._v("gc 현황을 확인하려면 bin/jstat 명령어를 사용하거나 -verbosegc 옵션을 추가해서 애플리케이션을 실행하면 된다. jstat은 eden, survivor, old 영역의 capacity, used 현황과 young gc, full gc의 횟수와 총 gc 소요시간을 보여준다.")])]),t._v(" "),e("tr",[e("td",[t._v("19")]),t._v(" "),e("td",[t._v("프레임워크는 제어권이 프레임워크에 있기 때문에(IoC) 개발자가 코드 작성을 하면 애플리케이션 코드가 프레임워크에 의해 사용 및 생명주기가 관리된다. 라이브러리는 특정 기능을 사용하기 위해 가져다 쓰는 기능의 집합이다.")])]),t._v(" "),e("tr",[e("td",[t._v("20")]),t._v(" "),e("td",[e("code",[t._v("@FunctionalInterface")]),t._v(" 어노테이션을 붙이면 인터페이스에 추상메소드를 1개만 선언할 수 있다. 2개 이상 선언하면 에러가 발생한다. 이 어노테이션이 있는 경우 람다식으로 메소드를 바로 구현하여 사용할 수 있다.")])]),t._v(" "),e("tr",[e("td",[t._v("21")]),t._v(" "),e("td",[t._v("Parameter는 함수를 선언할 때 사용되는 변수이고, Argument는 함수 호출 시 함수의 파라미터로 전달된 실제 값이다. 매번 찾아보고 잊어버리는 개념")])]),t._v(" "),e("tr",[e("td",[t._v("22")]),t._v(" "),e("td",[t._v("프레임워크는 개발자가 작성한 코드에 대한 제어권을 가지고 코드를 가져다 쓰고, 생명주기를 관리한다. 개발자는 코드를 작성만 할 뿐, 제어권이 프레임워크에 있다. 라이브러리는 특정 기능을 사용하기 위해 개발자가 가져다 쓰는 기능의 집합이다.")])]),t._v(" "),e("tr",[e("td",[t._v("23")]),t._v(" "),e("td",[t._v("스프링 "),e("code",[t._v("@Transactional")]),t._v(" 어노테이션으로 트랜잭션을 설정할 때 isolation level은 명시하지 않으면 DB의 디폴트 isolation level이 적용된다. MySQL은 repeatable read, Oracle은 read committed가 디폴트이다.")])]),t._v(" "),e("tr",[e("td",[t._v("24")]),t._v(" "),e("td",[t._v("es6에서 등장한 자바스크립트 arrow function expression(=>)은 익명 함수로, 화살표를 사용하여 함수를 더 간단하게 만들 수 있다. arrow function은 자신의 this가 없는 대신, 자신을 둘러싼 scope(lexical scope)의 this가 사용되기 때문에 만약 lexical scope의 this가 undefined이면 this를 사용할 수 없다.")])]),t._v(" "),e("tr",[e("td",[t._v("25")]),t._v(" "),e("td",[t._v("리눅스 서버에서 물리 메모리가 부족하게 되면 저장공간 일부를 메모리처럼 사용하게 되는데, 이 현상을 swap 또는 페이징이라고 한다. 저장공간에 접근하는 속도는 메모리 접근 속도보다 느리다. 만성적으로 메모리가 부족하게 되면 swap in(swap 영역을 물리 메모리로 사용하는 것), swap out(물리 메모리처럼 사용하던 swap 영역을 다시 되돌리는 것)이 반복되는 스레싱(thrashing) 상태가 일어나게 된다. swap할 영역도 없다면 Out Of Memory 상태가 되는데, 이렇게 되면 OS가 적절한 프로세스를 찾아 kill하는데 이를 OOM Killer라고 한다. 메모리 관리 시스템은 죽이기 가징 쉬운 프로세스, 즉 죽였을 때 큰 메모리를 확보할 수 있고 시스템에 영향을 주지 않을 프로세스를 찾는다.")])]),t._v(" "),e("tr",[e("td",[t._v("26")]),t._v(" "),e("td",[t._v("javascript test 라이브러리인 jest에서 describe는 grouping을 의미하고, it은 test를 의미한다.")])]),t._v(" "),e("tr",[e("td",[t._v("27")]),t._v(" "),e("td",[t._v("진짜 별거 아닌데... 캐시에 집어넣는걸 put이라고도 하는데 populate라고도 한다.")])]),t._v(" "),e("tr",[e("td",[t._v("28")]),t._v(" "),e("td",[t._v("vue2와 vue3은 기본적으로 호환이 되지 않는다. 대신 Vue2의 컴포넌트를 Vue3에서 지원하도록 하는 @vue/compat 모듈이 추가되었다.")])]),t._v(" "),e("tr",[e("td",[t._v("29")]),t._v(" "),e("td",[t._v("파이썬 문법을 이것저것 봤다. 정리하기에는 양이 많음..!")])]),t._v(" "),e("tr",[e("td",[t._v("30")]),t._v(" "),e("td",[t._v("어제에 이어 파이썬을 조금 더 봤다.")])]),t._v(" "),e("tr",[e("td",[t._v("31")]),t._v(" "),e("td",[t._v("Class.forName()은 Java Reflection API의 일부로, Reflection API는 구체적인 클래스의 타입을 알지 못해도 클래스의 변수 및 메소드 등에 접근하게 해 주는 API이다. 자바의 class 파일들은 바이트코드로 컴파일되어 method 영역에 저장되기 때문에 클래스 이름만 알면 클래스의 정보를 알 수 있다.")])])])]),t._v(" "),e("h2",{attrs:{id:"june"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#june"}},[t._v("#")]),t._v(" June")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("day")]),t._v(" "),e("th",[t._v("log")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",[t._v("오늘은 별거 못보고 넘어갔다. 아파서 급하게 휴가ㅠㅠ")])]),t._v(" "),e("tr",[e("td",[t._v("2")]),t._v(" "),e("td",[t._v("퇴사 준비중...")])]),t._v(" "),e("tr",[e("td",[t._v("3")]),t._v(" "),e("td",[t._v("Enum을 Response로 받으면 front단에서 Enum 이름을 받는데 Enum 객체 전체를 리턴하려면 Enum에 "),e("code",[t._v("@JsonFormat(shape = Shape.OBJECT)")]),t._v("를 추가하면 된다. 특정 값만 리턴하기를 원한다면 해당 필드 위에 "),e("code",[t._v("@JsonValue")]),t._v(" 어노테이션을 추가하면 된다.")])]),t._v(" "),e("tr",[e("td",[t._v("4")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("5")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("6")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("7")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("8")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("9")]),t._v(" "),e("td",[t._v("TPS는 Transaction Per Seconds를 말하며, 서비스 성능의 기준치이자 성능 측정의 단위라고 볼 수 있다. 일정 시간동안 실행된 트랜잭션의 개수를 구하고, 이를 1초 구간에 대한 값으로 변경하여 계산할 수 있다.")])]),t._v(" "),e("tr",[e("td",[t._v("10")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("11")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("12")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("13")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("14")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("15")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("16")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("17")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("18")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("19")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("20")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("21")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("22")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("23")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("24")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("25")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("26")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("27")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("28")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("29")]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("30")]),t._v(" "),e("td")])])]),t._v(" "),e("Comments")],1)}),[],!1,null,null,null);v.default=r.exports}}]);