--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2
-- Dumped by pg_dump version 16.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Projects; Type: TABLE; Schema: public; Owner: Cesar4280
--

CREATE TABLE public."Projects" (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    enabled boolean NOT NULL,
    time_zone character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Projects" OWNER TO "Cesar4280";

--
-- Name: Projects_id_seq; Type: SEQUENCE; Schema: public; Owner: Cesar4280
--

CREATE SEQUENCE public."Projects_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Projects_id_seq" OWNER TO "Cesar4280";

--
-- Name: Projects_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: Cesar4280
--

ALTER SEQUENCE public."Projects_id_seq" OWNED BY public."Projects".id;


--
-- Name: Projects id; Type: DEFAULT; Schema: public; Owner: Cesar4280
--

ALTER TABLE ONLY public."Projects" ALTER COLUMN id SET DEFAULT nextval('public."Projects_id_seq"'::regclass);


--
-- Data for Name: Projects; Type: TABLE DATA; Schema: public; Owner: Cesar4280
--

COPY public."Projects" (id, name, enabled, time_zone, "createdAt", "updatedAt") FROM stdin;
2	Test Project	t	Europe/Moscow	2024-02-21 04:09:39.525078+00	2024-02-21 04:09:39.525078+00
3	Odisea	t	Europe/Madrid	2024-02-21 04:11:15.812189+00	2024-02-21 04:11:15.812189+00
5	Troya	t	Europe/Paris	2024-02-21 04:16:02.869705+00	2024-02-21 04:16:02.869705+00
4	Iliada	t	Europe/Paris	2024-02-21 04:16:27.810056+00	2024-02-21 04:16:27.810056+00
1	Ulises	t	Europe/Roma	2024-02-21 04:17:01.460594+00	2024-02-21 04:17:01.460594+00
6	Ifel	t	Europe/Paris	2024-02-21 04:16:02.869705+00	2024-02-21 04:16:02.869705+00
\.


--
-- Name: Projects_id_seq; Type: SEQUENCE SET; Schema: public; Owner: Cesar4280
--

SELECT pg_catalog.setval('public."Projects_id_seq"', 6, true);


--
-- Name: Projects Projects_pkey; Type: CONSTRAINT; Schema: public; Owner: Cesar4280
--

ALTER TABLE ONLY public."Projects"
    ADD CONSTRAINT "Projects_pkey" PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

